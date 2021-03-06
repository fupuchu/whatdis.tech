const sha512 = require('js-sha512')

//generate session key

module.exports = (db) => {
    const Registration = (params, cb) => {
        let hashbrowns = sha512(params.password)
        let userInsert = 'INSERT INTO users (username, first_name, last_name, email, password, location) VALUES ($1, $2, $3, $4, $5, $6)'
        let userValues = [params.username, params.first_name, params.last_name, params.email, hashbrowns, params.location]
        db.query(userInsert, userValues, cb)
    }
    const Login = (params, cb) => {
        let loginQuery = 'SELECT * FROM users WHERE email = $1 AND password = $2'
        let hashbrowns = sha512(params.password)
        let loginValues = [params.email, hashbrowns]
        db.query(loginQuery, loginValues, cb)
    }
    const AuthSession = (params, params2, db) => {
        let insertQuery = 'UPDATE users SET session = $1 WHERE userid = $2'
        let insertValue = [params, params2]
        console.log('trying to update')
        db.query(insertQuery, insertValue)
    }
    // const AuthQuery = (db) => {
    //     let sessionQuery = 'SELECT session FROM users WHERE session_id = $1'
    //     let getDBsession = '1234'
    //     db.query(sessionQuery, getDBsession, cb)
    // }
    return {
        Registration : Registration,
        Login : Login,
        AuthSession : AuthSession
    }
}