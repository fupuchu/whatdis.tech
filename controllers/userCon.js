const sha512 = require('js-sha512')

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
                response.cookie('is_logged_in' , 'true')
                response.cookie('userid' , queryRes.rows[0].userid)
                console.log(req.cookies)
                response.status(200).redirect('/')
            }
        })
    }
    return {
        RegisterMe : RegisterMe,
        LoginController: LoginController
    }
}