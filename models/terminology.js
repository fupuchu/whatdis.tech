module.exports = (db) => {
    let getAllTerm = (cb) => {
        let queryString = 'SELECT * FROM terminology;'
        db.query(queryString, cb)
    }
    let getAllCat = (cb) => {
        let queryString = 'SELECT * FROM categories'
        db.query(queryString, cb)
    }
    let getSingleCat = (cb) => {
        let queryString = 'SELECT * FROM categories WHERE category_id = $1'
        let queryValue = [req.params.category]
        db.query(queryString, queryValue, cb)
    }
    return {
        getAllTerm : getAllTerm,
        getAllCat : getAllCat,
        getSingleCat : getSingleCat
    }
}