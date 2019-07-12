import React from "react";
import SearchForm from "./SearchForm";
import Navigation from "./Navigation";

export default class Portal extends React.Component {

  render() {
    return(
      <div className="portal-container">
        <Navigation />
        <SearchForm />
      </div>
    );
  }
}
