CREATE DATABASE plugvancouver;

CREATE TABLE songs(
  song_id SERIAL PRIMARY KEY,
  songLink VARCHAR(255),
  songName VARCHAR(255),
  songArtist VARCHAR(255),
  votes int
);