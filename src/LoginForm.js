import React from "react";
import './LoginForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
export default class LoginForm extends React.Component {
  render() {
    return(
      <form className="login-form">
        <h1 class="login-form__header"><FontAwesomeIcon icon={faKey} className="registration-form__icon"/><i class="fal fa-route-highway"></i>Log Into Your Account</h1>
        <input type="text" name="username" placeholder="Username" className="login-form__input"/>
        <input type="password" name="password" placeholder="Password" className="login-form__input"/>
        <button class="login-form__button">Log Into Your Account</button>
      </form>
    );
  }
}
