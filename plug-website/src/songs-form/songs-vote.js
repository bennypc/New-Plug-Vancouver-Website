import React, { useState } from "react";
import "./songs-vote.css";

const SongsVote = () => {
  const [songLink, setSongLink] = useState("");
  const [songName, setsongName] = useState("");
  const [songArtist, setsongArtist] = useState("");
  const votes = 0;

  //   const onSubmitForm = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const body = { songLink, songName, songArtist, votes };
  //       const repsonse = fetch();
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };

  return (
    <div>
      <form action="#">
        <div className="form left">
          <p className="form-title">Submit your song!</p>
          <div className="input">
            <label for="event-name">Song Link</label>
            <input
              type="text"
              name="song-link"
              id="song-link"
              value={songLink}
              onChange={(e) => setSongLink(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <label for="location-name">Song Name</label>
            <input
              type="text"
              name="song-name"
              id="song-name"
              value={songName}
              onChange={(e) => setsongName(e.target.value)}
            />
          </div>

          <div className="input">
            <label for="instagram-name">Song Artist</label>
            <input
              type="text"
              name="song-artist"
              id="song-artist"
              value={songArtist}
              onChange={(e) => setsongArtist(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="left button">
          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default SongsVote;
