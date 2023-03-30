import React from "react";
import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch, handlePlaylistChange }) {
  const [term, setTerm] = useState("");

  function search() {
    onSearch(term);
  }

  function handleTermChange(e) {
    setTerm(e.target.value);
  }

  function handleOptionChange(e) {
    handlePlaylistChange(e);
  }

  return (
    <div className="container">
      <div className="radio">
        <label>
          New Playlist
          <input
            type="radio"
            name="playlist"
            value="New Playlist"
            defaultChecked={true}
            onChange={handleOptionChange}
          />
        </label>
        <label>
          User's Playlists
          <input
            type="radio"
            name="playlist"
            value="User Playlist"
            onChange={handleOptionChange}
          />
        </label>
      </div>

      <div className="SearchBar">
        <input
          onChange={handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className="SearchButton" onClick={search}>
          SEARCH
        </button>
      </div>
    </div>
  );
}
