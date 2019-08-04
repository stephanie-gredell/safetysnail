import React from "react";
import './Guest.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Guest extends React.Component {

  render() {
    return(
      <div className="guest__container">

        <h1 className="guest__header">Safety Snail</h1>
        <p className="guest__description">Control what your kids see on the internet.</p>
        <p className="guest__description">Safety Snail is a suite of tools to limit what your kids are able to see on
        the internet.</p>

        <ul className="guest__features-list">
          <li>Support for Firefox and Chrome browsers</li>
          <li>Use our desktop and mobile apps to show curated content</li>
          <li>Join our community of other parents</li>
        </ul>

        <div className="guest__signup-container">
          <h2 className="guest__sign-up-header">Get on the waiting list!</h2>

          <input type="email" className="guest__input--signup" placeholder="Enter your email address" />
          <button className="guest__button--submit">Submit</button>

        </div>
      </div>
    );
  }
}
