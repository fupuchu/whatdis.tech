module.exports = (db) => {
    let getAllCat = (cb) => {
        let queryString = 'SELECT * FROM categories'
        db.query(queryString, cb)
    }
    let getSingleCat = (params, cb) => {
        let queryString = 'SELECT * FROM categories INNER JOIN terminology ON terminology.category_id = categories.category_id WHERE categories.category_id = $1;'
        let queryValue = [params.category]
        db.query(queryString, queryValue, cb)
    }
    return {
        getAllCat : getAllCat,
        getSingleCat : getSingleCat
    }
}