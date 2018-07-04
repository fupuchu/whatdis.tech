const express = require('express')
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'))


require('./routes')(app);


app.listen(3000)
console.log('whatdis.tech started on http://localhost:3000');
