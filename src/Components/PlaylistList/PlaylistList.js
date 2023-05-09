import React from "react";
import "./PlaylistList.css";

import Accordion from "../Accordion/Accordion";

export default function PlaylistList(props) {
  return (
    <div className="PlaylistList">
      {props.playlists.map((playlist, index) => {
        let playlistId = playlist.playlistId;
        return <Accordion key={index} playlistId={playlistId} />;
      })}
    </div>
  );
}
