import React from "react";
import './Guest.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Guest extends React.Component {

  render() {
    return(
      <div className="guest__container">

        <h1 className="guest__header">Kindervibes</h1>
        <p className="guest__description">Kindervibes is a cross platform software suite to help keep kids safe on the internet.</p>

        <ul className="guest__features-list">
          <li className="guest__features-list--item"><FontAwesomeIcon icon="check-square" /> Available on PC, Mac, iOS, and Android</li>
          <li className="guest__features-list--item"><FontAwesomeIcon icon="check-square" /> Control access from anywhere</li>
          <li className="guest__features-list--item"><FontAwesomeIcon icon="check-square" /> Set timers to limit use</li>
          <li className="guest__features-list--item"><FontAwesomeIcon icon="check-square" /> Filter online videos and social media content</li>
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
