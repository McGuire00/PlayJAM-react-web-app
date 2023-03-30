import React from "react";
import "./PlaylistItem.css";

export default function PlaylistItem(props) {
  return (
    <div className="Playlists">
      <div className="Playlist-information">
        <h3 name={props.name}>{props.name}</h3>
      </div>
    </div>
  );
}
