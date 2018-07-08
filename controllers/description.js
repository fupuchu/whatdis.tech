module.exports = (db) => {
    const getAllDescrip = (req, response) => {
        db.desc.getAllDesc((err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    const getSingleDescrip = (req, response) => {
        db.desc.getSingleDesc(req.params, (err, queryRes) => {
            if (err){
                response.send(err)
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    const recThis = (req, response) => {
        console.log(req.cookies)
        if (req.cookies.is_logged_in == undefined) {
            response.status(200).render('Registration', {msg : 'You need to Register or Login to vote'})
        } else {
            db.desc.checkVote(req, (err, queryRes) => {
                if (queryRes.rows != 0){
                    console.log('you cannot vote')
                    response.status(200).render('Error', {
                        msg : 'You can only vote once',
                        link: '/' + req.body.term_title + '/all',
                        linkMsg : 'Go Back'
                    })
                } else {
                    console.log('you can vote')
                    db.desc.recommendMe(req.body, (err, queryRes) => {
                        if (err){
                            response.send("????")
                        } else {
                            db.desc.uniqueVote(req, (err, queryRes) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log(queryRes.rows)
                                }
                            })
                            response.status(200).redirect('/' + req.body.term_title + '/all')
                        }
                    })
                }
            })
        }
    }
    const submitDescrip = (req, response) => {
        if (req.cookies.is_logged_in == undefined){
            response.render('Error', {
                msg : 'You need to be logged in to submit a description',
                link : '/registration',
                linkMsg : 'Register'
            })
        } else {
            if (req.body.desc_text.length < 1) {
                response.send("You need to submit something")
            } else {
                db.desc.submitDesc(req.body, (err, queryRes) => {
                    if (err) {
                        response.send(err)
                    } else {
                        response.status(200).redirect('/' + req.body.terminology_title + '/all')
                    }
                })
            }
        }
    }
    const voteOnce = (req,response) => {
        let cookies = req.cookies
        db.desc.uniqueVote(cookies, (err,queryRes) => {
            if (err) {
               response.send(err) 
            } else {
                console.log(queryRes)
            }
        })
    }
    return {
        getAllDescrip : getAllDescrip,
        getSingleDescrip : getSingleDescrip,
        recThis : recThis,
        submitDescrip : submitDescrip,
        voteOnce : voteOnce
    }
}