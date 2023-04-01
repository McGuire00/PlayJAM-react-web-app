import React from "react";
import "./Playlist.css";

import PlaylistList from "../PlaylistList/PlaylistList";
import TrackList from "../TrackList/TrackList";

export default function Playlist({
  playlists,
  playlistSelection,
  playlistName,
  playlistTracks,
  onRemove,
  onNameChange,
  onSave,
}) {
  let playlistType =
    playlistSelection === "New Playlist" ? "New Playlist" : "User's Playlist";

  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

  function renderPlaylistSelection() {
    if (playlistType === "New Playlist") {
      return (
        <TrackList
          tracks={playlistTracks}
          onRemove={onRemove}
          isRemoval={true}
        />
      );
    } else {
      return (
        <PlaylistList playlists={playlists} playlistDetails={playlistDetails} />
      );
    }
  }

  return (
    <div className="Playlist">
      <input
        placeholder={playlistType}
        onChange={handleNameChange}
        value={playlistName}
      />
      {renderPlaylistSelection()}
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}
