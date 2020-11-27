import React from "react";

const Song = ({ song }) => <li>{song}</li>;

export default function Playlist({ songs }) {
  return songs.map((song, i) => <Song key={i} song={song} />);
}
