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
    return {
        getAllTerm : getAllTerm,
        getCategoryTerms: getCategoryTerms,
        getSingleTerm : getSingleTerm
    }
}