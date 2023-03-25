import React from "react";
import "./TrackList.css";

import Track from "../Track/Track";

export default function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks.map((track, index) => {
        return (
          <Track
            track={track}
            key={index}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
          />
        );
      })}
    </div>
  );
}
