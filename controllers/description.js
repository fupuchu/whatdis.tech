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
        console.log("recommend this triggered")
        db.desc.recommendMe(req.body, (err, queryRes) => {
            if (err){
                response.send("????")
            } else {
                response.status(200).redirect('/' + req.body.term_title + '/all')
            }
        })
    }
    const submitDescrip = (req, response) => {
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
    return {
        getAllDescrip : getAllDescrip,
        getSingleDescrip : getSingleDescrip,
        recThis : recThis,
        submitDescrip : submitDescrip
    }
}