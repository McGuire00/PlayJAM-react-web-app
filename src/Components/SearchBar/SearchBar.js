import React from "react";
import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  function search() {
    onSearch(term);
  }

  function handleTermChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="SearchBar">
      <input
        onChange={handleTermChange}
        placeholder="Enter A Song, Album, or Artist"
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}
// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       term: "",
//     };

//     this.search = this.search.bind(this);
//     this.handleTermChange = this.handleTermChange.bind(this);
//   }

//   search() {
//     this.props.onSearch(this.state.term);
//   }

//   handleTermChange(event) {
//     this.setState({ term: event.target.value });
//   }

//   render() {
//     return (
//       <div className="SearchBar">
//         <input
//           onChange={this.handleTermChange}
//           placeholder="Enter A Song, Album, or Artist"
//         />
//         <button className="SearchButton" onClick={this.search}>
//           SEARCH
//         </button>
//       </div>
//     );
//   }
// }

// export default SearchBar
