const express = require('express')
const morgan = require('morgan')

const db = require('./configs/database');

const app = express();

app.use(morgan('dev'))


require('./routes')(app, db);


app.listen(8080)
console.log('whatdis.tech started on http://localhost:8080');
