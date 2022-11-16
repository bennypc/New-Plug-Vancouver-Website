const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Thecar26102002!",
  host: "localhost",
  port: 5432,
  database: "plugvancouver",
});

module.exports = pool;
