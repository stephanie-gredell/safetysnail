import React from "react";
import Navigation from "./Navigation";
import YoutubeSearch from "./YoutubeSearch"

export default class Portal extends React.Component {

  render() {
    return(
      <div className="portal-container">
        <Navigation />
        <YoutubeSearch />
      </div>
    );
  }
}
