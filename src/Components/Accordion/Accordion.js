import React, { useState, useEffect } from "react";
import "./Accordion.css";

import Spotify from "../../util/Spotify";

export default function Accordion(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [playlistDetails, setPlaylistDetails] = useState();

  useEffect(() => {
    getPlaylistTracks(props.playlistId);
  }, [props.playlistId]);

  function getPlaylistTracks(playlistId) {
    Spotify.getPlaylistDetails(playlistId).then((tracks) => {
      setPlaylistDetails(tracks);
    });
  }

  function renderAccordion() {
    if (playlistDetails) {
      return playlistDetails.map((playlistTrack, index) => {
        return (
          <div className="list-item" key={index}>
            <p>{playlistTrack.songName}</p>
          </div>
        );
      });
    }
  }

  return (
    <div className="accordion-container">
      <div className="accordion">
        <div
          className="accordion-title"
          onClick={() => setIsVisible(!isVisible)}
        >
          {"Playlist #1"}
        </div>
      </div>
      <div className={`content ${isVisible ? "show-content" : ""}`}>
        {renderAccordion()}
        {/* <div className="list-item">
          <p>Item 1</p>
        </div>
        <div className="list-item">
          <p>Item 2</p>
        </div>
        <div className="list-item">
          <p>Item 3</p>
        </div>
        <div className="list-item">
          <p>Item 1</p>
        </div>
        <div className="list-item">
          <p>Item 2</p>
        </div>
        <div className="list-item">
          <p>Item 3</p>
        </div> */}
      </div>
    </div>
  );
}
