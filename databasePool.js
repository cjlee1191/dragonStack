const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;

//test connection 
// pool.query('SELECT * FROM generation', (error, response) => {
//    if(error) return console.log('error', error);

//    console.log('success');
// })