const sha512 = require('js-sha512')
const secrets = require('../configs/secret')

module.exports = (db) => {
    const RegisterMe = (req, response) => {
        db.user.Registration(req.body, (err, queryRes) => {
            if (err) {
                response.send(err)
            } else {
                response.status(200).redirect('/login')
            }
        })
    }
    const LoginController = (req, response) => {
        db.user.Login(req.body, (err, queryRes) => {
            console.log(queryRes.rows)
            if (queryRes.rows < 1){
                response.status(304).redirect('/Login')
            } else {
                let session_key = sha512(secrets.salt.key + queryRes.rows[0].userid)
                response.cookie('is_logged_in' , 'true')
                response.cookie('userid' , queryRes.rows[0].userid)
                response.cookie('sessionToken' , session_key)
                response.status(200).redirect('/')
                console.log(req.cookies)
            }
        })
    }
    return {
        RegisterMe : RegisterMe,
        LoginController: LoginController
    }
}