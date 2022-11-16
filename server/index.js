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

    console.log(songLink, songName, songArtist, votes);
    res.json(newSong.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all songs

app.get("/songs", async (req, res) => {
  try {
    const allSongs = await pool.query("SELECT * FROM songs");
    res.json(allSongs.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get single song

app.get("/songs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const song = await pool.query("SELECT * FROM songs WHERE song_id = $1", [
      id,
    ]);

    res.json(song.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update song
app.put("/songs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { songLink, songName, songArtist, votes } = req.body;
    const updateSong = await pool.query(
      "UPDATE songs SET songLink = $1, songName = $2, songArtist = $3, votes = $4 WHERE song_id = $5",
      [songLink, songName, songArtist, votes, id]
    );

    res.json("Song was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// delete song

app.delete("/songs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSong = await pool.query(
      "DELETE FROM songs WHERE song_id = $1",
      [id]
    );
    res.json("Song was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
