module.exports = (db) => {
    const getAllCategories = (req, response) => {
        db.cat.getAllCat((err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {
                console.log('listen all categories');
                response.status(200).render('category', {category : queryRes.rows})
            }
        })
    }
    const getSingleCategory = (req, response) => {
        db.cat.getSingleCat(req.params, (err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {                
                response.status(200).render('singlecategory', {
                    onecat : queryRes.rows,
                    title : queryRes.rows[0].category_name,
                })
            }
        })
    }
    return {
        getAllCategories : getAllCategories,
        getSingleCategory : getSingleCategory
    }
}