const e = require("express");

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "plugadmin",
  password: "PlugVancouver",
  host: "plug-vancouver.cx0voxmm1sfb.us-west-2.rds.amazonaws.com",
  port: 5432,
  database: "plug_db",
});

// pool.query(
//   `CREATE TABLE songs(
//   song_id SERIAL PRIMARY KEY,
//   songLink VARCHAR(255),
//   songName VARCHAR(255),
//   songArtist VARCHAR(255),
//   votes int
// );`,
//   (err, res) => {
//     if (!err) {
//       console.log("good");
//     } else {
//       console.log(err.message);
//     }
//   }
// );

module.exports = pool;
