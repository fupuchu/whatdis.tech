const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')

const db = require('./configs/database')

const app = express()

const reactEngine = require('express-react-views').createEngine()
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', reactEngine)

var myLogger = function (req, res, next) {
    if (req.cookies.is_logged_in == 'true') {
        res.locals.loggedIn = true;
        console.log('middlerware', res.locals);
    } else {
        res.locals.loggedIn = false;
        console.log('middleware', res.locals);
    }
    next()
  }

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(express.static('public'));
app.use(myLogger)

require('./routes')(app, db)

var PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Server started on http://localhost:' + PORT));
