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
    let recommendMe = (params, cb) => {
        let updateString = 'UPDATE description SET desc_vote = $1 WHERE desc_id = $2'
        let plusOne = parseInt(params.desc_vote) + 1
        let updateValue = [plusOne, params.desc_id]
        db.query(updateString,updateValue, cb)
    }
    return {
        getAllDesc : getAllDesc,
        getSingleDesc : getSingleDesc,
        recommendMe: recommendMe
    }
}