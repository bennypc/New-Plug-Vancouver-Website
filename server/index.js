const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create new song

app.post("/songs", async (req, res) => {
  try {
    const { songLink, songName, songArtist, votes } = req.body;
    const newSong = await pool.query(
      "INSERT INTO songs (songLink, songName, songArtist, votes) VALUES($1, $2, $3, $4) RETURNING *",
      [songLink, songName, songArtist, votes]
    );

    res.json(newSong.rows[0]);
    console.log(songLink, songName, songArtist, votes);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
