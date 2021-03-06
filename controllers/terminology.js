module.exports = (db) => {
    const getAllTerminology = (req,response) => {
        db.term.getAllTerm((err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    const listCategoryTerms = (req, response) => {
        db.term.getCategoryTerms(req.params, (err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    const listSingleTerm = (req, response) => {
        db.term.getSingleTerm(req.params, (err, queryRes) => {
            console.log(req.params)
            if (queryRes.rows.length < 1) {
                if (err) {
                    response.send(err)
                } else {
                    db.term.defaultDesc(req.params, (err, queryRes) => {
                        response.status(200).redirect(req.originalUrl)
                    })
                }
            } else {
                if (err) {
                    response.send(err)
                } else {
                    response.status(200).render('SingleTerm', {
                        singleterm : queryRes.rows,
                        terminology_title : req.params.singleterm,
                        category_id : queryRes.rows[0].category_id
                    })
                }
            }
        })
    }
    const SubmitTerm = (req, response) => {
        if (req.cookies.is_logged_in == 'true'){
            if (req.body.terminology_title == '') {
                response.status(200).render('SubmitTerm', {
                    warn: 'You need to submit something first!'
                }
            )
            } else {
                db.term.checkTerm(req.body, (err, queryRes) => {
                    if (queryRes.rows == '') {
                        db.term.postTerm(req.body, (err, queryRes) => {
                            if (err) {
                                response.send(err)
                            } else {
                                response.status(200).redirect('/category/' + req.body.category_id)
                            }
                        })     
                    } else {
                        response.status(200).render('Error', {
                            msg: 'Error! Terminology already exists.',
                            link: '/category',
                            linkMsg: 'Go Back'
                        })
                    }
                })
            }
        } else {
            response.status(200).render('Registration', {
                msg: 'You need to register or login to submit!'
            }) 
        }
    }
    return {
        getAllTerminology : getAllTerminology,
        listCategoryTerms : listCategoryTerms,
        listSingleTerm : listSingleTerm,
        SubmitTerm : SubmitTerm
    }
}