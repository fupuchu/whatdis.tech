module.exports = (db) => {
    const getAllCategories = (req, response) => {
        db.cat.getAllCat((err, queryRes) => {
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
        db.cat.getSingleCat(req.params, (err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    return {
        getAllCategories : getAllCategories,
        getSingleCategory : getSingleCategory
    }
}