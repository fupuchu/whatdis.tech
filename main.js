const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const db = require('./configs/database');

const app = express();

const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('public', __dirname + '/public');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());

require('./routes')(app, db);

app.listen(8080)
console.log('whatdis.tech started on http://localhost:8080');
