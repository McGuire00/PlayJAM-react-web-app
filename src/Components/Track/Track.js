import React from "react";
import "./Track.css";

export default function Track({ track, key, onAdd, onRemove, isRemoval }) {
  function addTrack() {
    onAdd(track);
  }

  function removeTrack() {
    onRemove(track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        {/* <p>
          <img src={this.props.track.image} alt="#" />
        </p> */}
        <p>
          <img src={track.image} alt={`Album art for ${track.artist}`} />
          {track.artist} | {track.album}
        </p>
      </div>
      {isRemoval ? (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      ) : (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      )}
    </div>
  );
}
