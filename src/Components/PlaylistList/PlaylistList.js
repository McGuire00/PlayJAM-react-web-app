import React from "react";
import "./PlaylistList.css";

import PlaylistItem from "../PlaylistItem/PlaylistItem";

export default function PlaylistList(props) {
  return (
    <div className="PlaylistList">
      {props.playlists &&
        props.playlists.map((playlist, index) => {
          return (
            <PlaylistItem
              key={playlist.playlistId}
              name={playlist.playlistName}
            />
          );
        })}
    </div>
  );
}
