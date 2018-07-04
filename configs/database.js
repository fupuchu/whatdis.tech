const pg = require('pg')
const description = require('../models/description')
const terminology = require('../models/terminology')
const secret = require('./secret')
// const user = require('../models/userreg')
const config = {
    user: secret.hideMe.user,
    host: secret.hideMe.host,
    database: secret.hideMe.database,
    port: secret.hideMe.port
  }

const poolConnect = new pg.Pool(config)

poolConnect.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
  });

const descModel = description(poolConnect);
// const userModel = user(poolConnect);
const termModel = terminology(poolConnect);

module.exports = {
    desc : descModel,
    term : termModel
    // user : userModel
}