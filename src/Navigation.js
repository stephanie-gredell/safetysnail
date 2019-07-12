import React from "react";
import { Link } from "react-router-dom";
import { NavigationData } from "./data/navigation"

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSubmitted: false,
      items: NavigationData
    };
  }

  render() {
    return(
      <ul>
      {this.state.items.map(item => (
        <li key={item.url}>
          <Link to={item.url}>{item.name}</Link>
        </li>
      ))}
      </ul>
    )
  }
}
