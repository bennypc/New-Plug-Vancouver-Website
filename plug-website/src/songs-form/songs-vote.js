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
          "Bearer BQAwEGmwDL1QS99j6ueN3uu1d-9EPRIWR0pncV8EN6MEAdjJE8XRIGLaL5B_iKyeAhbMIUiJKQJehPywggHq1Vsmznxc36ZjZSNTJpyqn_selTDbdsQd77thTBCcyB8iIVGdRGBlXD0AZ-NImm_T0cSuzrMquociWsc5iSXTTlcLeL31OySf16Ow-qemWi5Xgj4",
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
