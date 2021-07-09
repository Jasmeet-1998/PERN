const Pool = require('pg').Pool;


const pool = new Pool({
  user:  process.env.USER,
  password : process.env.PASS,
  host :  process.env.HOST,
  port : process.env.PORT_PG,
  database : process.env.DB
});

module.exports = pool;
