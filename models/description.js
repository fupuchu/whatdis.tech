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
    let submitDesc = (params, cb) => {
        let insertString = 'INSERT INTO description (terminology_title, desc_text) VALUES ($1, $2)'
        let insertValue = [params.terminology_title, params.desc_text]
        db.query(insertString, insertValue, cb)
    }
    return {
        getAllDesc : getAllDesc,
        getSingleDesc : getSingleDesc,
        recommendMe: recommendMe,
        submitDesc : submitDesc
    }
}