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
    const getAllCategories = (req, response) => {
        db.term.getAllCat((err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    const getSingleCategory = (req, response) => {
        console.log(req.params.category);
        db.term.getSingleCat((err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    return {
        getAllTerminology : getAllTerminology,
        getAllCategories : getAllCategories,
        getSingleCategory : getSingleCategory
    }
}