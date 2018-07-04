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
        console.log('listing single terms with all desc')
        db.term.getSingleTerm(req.params, (err, queryRes) => {
            if (err) {
                //render 404
                response.send(err)
            } else {
                response.status(200).render('singleterm', {singleterm : queryRes.rows})
            }
        })
    }
    return {
        getAllTerminology : getAllTerminology,
        listCategoryTerms : listCategoryTerms,
        listSingleTerm : listSingleTerm
    }
}