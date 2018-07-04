module.exports = (db) => {
    let getAllDesc = (cb) => {
        let queryString = 'SELECT * FROM description WHERE terminology_id = 2;'
        db.query(queryString, cb)
    }
    let getSingleDesc = (params, cb) => {
        let queryString = 'SELECT * FROM description WHERE desc_id = $1'
        let queryValue = [params.descid]
        db.query(queryString, queryValue, cb)
    }
    return {
        getAllDesc : getAllDesc,
        getSingleDesc : getSingleDesc
    }
}