import React, { useEffect, useState } from "react";
import "./songs-vote.css";
import supabase from "../supabase";

const SongsVote = () => {
  const [song_link, setsong_link] = useState("");
  const votes = 0;

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("submit");

    const songData = await fetchSpotify();

    console.log(songData);

    console.log(song_link);

    // console.log(songData?.name);
    // console.log(songData?.artists[0]?.name);

    const { data, error } = await supabase.from("songs").insert([
      {
        song_link,
        song_name: songData.name,
        song_artist: songData.artists[0]?.name,
        votes,
      },
    ]);
    window.location.href = "/songs-list";
  }

  async function fetchSpotify() {
    var mySubString = song_link.match(/track\/(.*)(\?si)/i);
    console.log(mySubString[1]);

    var apiLink = "https://api.spotify.com/v1/tracks/" + mySubString[1];

    console.log(apiLink);

    const songTest = await fetch(apiLink, {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer BQC9zXJBwKFkHJXSLRrAehwzMQ-QbSdLAt0vYdecnUvzUtqUrxl7S7YYopIaAo2t5YDaFsCDvFi9WUH7AhxlJxyISP-HwUUjN_THR7d6E_O05L0qiT7Jp8KmT9B7jwShPbP0bYqAkcVShPOzhTbV-l4-bB5Wy3ukQR52JVw_yCjClzj9DefzX57XqBUVpMjBcoE",
        "Content-Type": "application/json",
      },
    });
    const data = await songTest.json();
    return data;
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
        </div>

        <div className="left request-button">
          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default SongsVote;
