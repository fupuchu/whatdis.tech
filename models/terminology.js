module.exports = (db) => {
    let getAllTerm = (cb) => {
        let queryString = 'SELECT * FROM terminology;'
        db.query(queryString, cb)
    }
    let getCategoryTerms = (params, cb) => {
        console.log('firing getCategoryTerms');
        let queryString = 'SELECT * FROM terminology WHERE category_id = $1;'
        let queryValue = [params.termid]
        db.query(queryString, queryValue, cb)
    }
    let getSingleTerm = (params, cb) => {
        console.log('firing getSingleTerm');
        let queryString = 'SELECT * FROM terminology INNER JOIN description ON description.terminology_id = terminology.terminology_id WHERE description.terminology_title = $1'
        let queryValue = [params.singleterm]
        db.query(queryString, queryValue, cb)
    }
    let postTerm = (params, cb) => {
        console.log('submitting terminology form');
        let insertString = 'INSERT INTO terminology (terminology_title, category_id) VALUES ($1,$2)'
        let insertValues = [params.terminology_title, params.category_id]
        db.query(insertString, insertValues, cb)
    }
    return {
        getAllTerm : getAllTerm,
        getCategoryTerms: getCategoryTerms,
        getSingleTerm : getSingleTerm,
        postTerm : postTerm
    }
}