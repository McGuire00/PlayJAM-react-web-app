import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import Spotify from "../../util/Spotify";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistType, setPlaylistType] = useState("New Playlist");
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    Spotify.getAccessToken();
    getUserPlaylists();
  }, []);

  function addTrack(track) {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks([...playlistTracks, track]);
  }

  function search(term) {
    Spotify.search(term).then((results) => {
      setSearchResults(results);
    });
  }

  function removeTrack(track) {
    let tracks = playlistTracks.filter(
      (currentTrack) => currentTrack.id !== track.id
    );
    setPlaylistTracks(tracks);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    if (trackUris.length === 0) {
      return;
    }
    Spotify.savePlaylist(playlistName, trackUris).then(
      setPlaylistName(""),
      setPlaylistTracks([])
    );
    alert("Your playlist has been saved");
  }

  function getUserPlaylists() {
    Spotify.getUserPlaylists().then((playlists) => {
      setPlaylists(playlists);
    });
  }

  function handlePlaylistChange(e) {
    setPlaylistType(e.target.value);
  }

  return (
    <>
      <h1>
        PLAY<span className="highlight">jam</span>
      </h1>
      <div className="App">
        <div className="App-playlist">
          <SearchBar
            onSearch={search}
            handlePlaylistChange={handlePlaylistChange}
            playlistSelection={playlistType}
          />
          <SearchResults searchResults={searchResults} onAdd={addTrack} />

          <Playlist
            playlistSelection={playlistType}
            playlists={playlists}
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </>
  );
}
