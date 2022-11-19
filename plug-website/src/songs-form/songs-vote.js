import React, { useEffect, useState } from "react";
import "./songs-vote.css";
import supabase from "../supabase";

const SongsVote = () => {
  const [song_link, setsong_link] = useState("");
  const [song_name, setsong_name] = useState("");
  const [song_artist, setsong_artist] = useState("");
  const votes = 0;

  async function fetchData() {
    let { data: songs, error } = await supabase.from("songs").select("*");
    console.log(songs);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("submit");
    const { data, error } = await supabase
      .from("songs")
      .insert([{ song_link, song_name, song_artist, votes }]);
    window.location.href = "/songs-list";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form left">
          <p className="form-title">Submit your song!</p>
          <div className="input">
            <label for="event-name">Song Link</label>
            <input
              type="text"
              name="song-link"
              id="song-link"
              value={song_link}
              onChange={(e) => setsong_link(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <label for="location-name">Song Name</label>
            <input
              type="text"
              name="song-name"
              id="song-name"
              value={song_name}
              onChange={(e) => setsong_name(e.target.value)}
            />
          </div>

          <div className="input">
            <label for="instagram-name">Song Artist</label>
            <input
              type="text"
              name="song-artist"
              id="song-artist"
              value={song_artist}
              onChange={(e) => setsong_artist(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="left request-button">
          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default SongsVote;
