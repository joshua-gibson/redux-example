import React from "react";

const Song = ({ song }) => <li>{song.content}</li>;

export default function Playlist({ songs }) {
  return songs.map((song, i) => <Song key={i} song={song} />);
}
