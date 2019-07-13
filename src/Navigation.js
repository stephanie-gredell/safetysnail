import React from "react";
import { Link } from "react-router-dom";
import { NavigationData } from "./data/navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navigation.scss'

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
      <ul className="navigation">
      {this.state.items.map(item => (
        <li key={item.url} className="navigation__list-item">
          <Link to={item.url} className="navigation__link">

          <FontAwesomeIcon icon={item.icon} className="navigation__icon"/> {item.name}</Link>

        </li>
      ))}
      </ul>
    )
  }
}
