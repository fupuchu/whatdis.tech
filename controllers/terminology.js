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
            // console.log(req.params);
            if (err) {
                //render 404
                response.send(err)
            } else {
                response.status(200).render('singleterm', {
                    singleterm : queryRes.rows,
                    terminology_title : req.params.singleterm
                })
            }
        })
    }
    const SubmitTerm = (req, response) => {
        db.term.postTerm(req.body, (err, queryRes) => {
            if (err) {
                response.send(err)
            } else {
                response.status(200).redirect('/category/' + req.body.category_id)
            }
        })
    }
    return {
        getAllTerminology : getAllTerminology,
        listCategoryTerms : listCategoryTerms,
        listSingleTerm : listSingleTerm,
        SubmitTerm : SubmitTerm
    }
}