import React from "react";
import "./Track.css";

export default function Track({ track, key, onAdd, onRemove, isRemoval }) {
  function renderAction() {
    if (isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      );
    }
  }

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
          <img src={track.image} alt="#" />
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}
// class Track extends React.Component {
//   constructor(props) {
//     super(props);

//     this.addTrack = this.addTrack.bind(this);
//     this.removeTrack = this.removeTrack.bind(this);
//   }

//   renderAction() {
//     if (this.props.isRemoval) {
//       return (
//         <button className="Track-action" onClick={this.removeTrack}>
//           -
//         </button>
//       );
//     } else {
//       return (
//         <button className="Track-action" onClick={this.addTrack}>
//           +
//         </button>
//       );
//     }
//   }
//   addTrack() {
//     this.props.onAdd(this.props.track);
//   }

//   removeTrack() {
//     this.props.onRemove(this.props.track);
//   }

//   render() {
//     return (
//       <div className="Track">
//         <div className="Track-information">
//           <h3>{this.props.track.name}</h3>
//           {/* <p>
//             <img src={this.props.track.image} alt="#" />
//           </p> */}
//           <p>
//             <img src={this.props.track.image} alt="#" />
//             {this.props.track.artist} | {this.props.track.album}
//           </p>
//         </div>
//         {this.renderAction()}
//       </div>
//     );
//   }
// }

// export default Track;
