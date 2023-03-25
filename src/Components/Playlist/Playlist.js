import React from "react";
import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

export default function Playlist({
  playListName,
  playlistTracks,
  onRemove,
  onNameChange,
  onSave,
}) {
  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <input placeHolder={"New Playlist"} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}
