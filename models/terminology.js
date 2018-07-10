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
        let queryString = 'SELECT * FROM terminology INNER JOIN description ON description.terminology_title = terminology.terminology_title WHERE description.terminology_title = $1 ORDER BY description.desc_vote desc'
        let queryValue = [params.singleterm]
        db.query(queryString, queryValue, cb)
    }
    let postTerm = (params, cb) => {
        console.log('submitting terminology form');
        let insertString = 'INSERT INTO terminology (terminology_title, category_id) VALUES ($1,$2)'
        let insertValues = [params.terminology_title, params.category_id]
        db.query(insertString, insertValues, cb)
    }
    let defaultDesc = (params, cb) => {
        console.log('no desc detected, putting a default one')
        console.log('params')
        let insertString = 'INSERT INTO description (terminology_title, desc_text) VALUES ($1, $2)'
        let insertValues = [params.singleterm, 'No analogies here! Submit yours now!']
        db.query(insertString,insertValues, cb)
    }
    let checkTerm = (params, cb) => {        
        let queryString = 'SELECT * FROM terminology WHERE terminology_title = $1'
        let queryValue = [params.terminology_title]
        db.query(queryString, queryValue, cb)
    }
    return {
        getAllTerm : getAllTerm,
        getCategoryTerms: getCategoryTerms,
        getSingleTerm : getSingleTerm,
        postTerm : postTerm,
        defaultDesc: defaultDesc,
        checkTerm : checkTerm
    }
}