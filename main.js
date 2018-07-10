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

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(express.static('public'));

require('./routes')(app, db)

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));
