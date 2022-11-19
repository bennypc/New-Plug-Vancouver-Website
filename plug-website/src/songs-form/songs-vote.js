import React, { useEffect, useState } from "react";
import "./songs-vote.css";
import supabase from "../supabase";
import { Buffer } from "buffer";

const SongsVote = () => {
  const [song_link, setsong_link] = useState("");
  const votes = 0;

  async function authorize() {
    const client_id = "8b6cbaab4ead45c9a42deba0c7a4bac8";
    const client_secret = "8690833a817b44029a5e210d95307fcb";
    const payload = client_id + ":" + client_secret;
    const encodedPayload = Buffer.from(payload).toString("base64");

    const options = {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + encodedPayload,
      },
      json: true,
    };

    try {
      let res = await fetch("https://accounts.spotify.com/api/token", options);
      res = await res.json();

      return res.access_token;
    } catch (err) {
      console.log(err.message);
    }
  }

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
    const accessToken = await authorize();
    console.log(accessToken);

    var songID = song_link.match(/track\/(.*)(\?si)/i);
    console.log(songID[1]);

    var apiLink = "https://api.spotify.com/v1/tracks/" + songID[1];

    console.log(apiLink);

    const songTest = await fetch(apiLink, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
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
          <div className="input text-white">
            <label classname="text-white" for="song-link">
              Song Link
            </label>
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
