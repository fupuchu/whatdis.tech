const express = require('express')
const morgan = require('morgan')

const db = require('./configs/database');

const app = express();

app.use(morgan('dev'))


require('./routes')(app, db);


app.listen(3000)
console.log('whatdis.tech started on http://localhost:3000');
