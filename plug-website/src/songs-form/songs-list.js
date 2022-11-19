import React, { useEffect, useState } from "react";
import "./songs-vote.css";
import supabase from "../supabase";

const SongsList = () => {
  //   const [song_link, setsong_link] = useState("");
  //   const [song_name, setsong_name] = useState("");
  //   const [song_artist, setsong_artist] = useState("");
  //   const votes = 0;

  const [songArray, setSongArray] = useState([]);

  async function fetchData() {
    let { data: songs, error } = await supabase.from("songs").select("*");
    console.log(songs);

    setSongArray(songs);
  }

  const voteSong = async (id) => {
    let { data: songs } = await supabase
      .from("songs")
      .select("votes")
      .eq("id", id);

    console.log(songs[0].votes);
    var newVoteCount = songs[0].votes + 1;
    console.log(newVoteCount);

    const { data, error } = await supabase
      .from("songs")
      .update({ votes: newVoteCount })
      .eq("id", id);

    window.location.href = "/songs-list";
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(songArray);

  return (
    <div className="">
      <table className="w-full table-fixed text-sm text-left text-black dark:text-blackp">
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Song Artist</th>
            <th>Song Votes</th>
            <th>Vote here</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {songArray.map((song) => (
            <tr key={song.id}>
              <td>{song.song_name}</td>
              <td>{song.song_artist}</td>
              <td>{song.votes}</td>
              <td>
                <button
                  className="bg-black text-purple-500"
                  onClick={() => voteSong(song.id)}
                >
                  VOTE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsList;
