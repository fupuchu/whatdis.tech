const pg = require('pg')
const description = require('../models/description')
const terminology = require('../models/terminology')
const category = require('../models/category')
const user = require ('../models/userMod')
const secret = require('./secret')

if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  const config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  }
} else {
  const config = {
    user: secret.hideMe.user,
    host: secret.hideMe.host,
    database: secret.hideMe.database,
    port: secret.hideMe.port
  }
}

const poolConnect = new pg.Pool(config)

poolConnect.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
  });

const descModel = description(poolConnect);
const userModel = user(poolConnect);
const termModel = terminology(poolConnect);
const catModel = category(poolConnect);
module.exports = {
    desc : descModel,
    term : termModel,
    cat : catModel,
    user : userModel
}