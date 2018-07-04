module.exports = (db) => {
    let getAllDesc = (cb) => {
        let queryString = 'SELECT * FROM description WHERE terminology_id = 2;'
        db.query(queryString, cb)
    }
    return {
        getAllDesc : getAllDesc
    }
}