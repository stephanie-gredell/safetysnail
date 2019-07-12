import React from "react";

export default class Ratings extends React.Component {
  render() {
    return(
      <div className="ratings-buttons">
        <button>Thumbs up</button>
        <button>Thumbs down</button>
      </div>
    );
  }
}
