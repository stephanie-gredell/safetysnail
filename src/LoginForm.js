import React from "react";
import './LoginForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
  }

  render() {
    return(
      <form className="login-form">
        <h1 className="login-form__header"><FontAwesomeIcon icon={faKey} className="registration-form__icon"/><i className="fal fa-route-highway"></i>Log Into Your Account</h1>
        <input type="text" name="username" placeholder="Username" className="login-form__input"/>
        <input type="password" name="password" placeholder="Password" className="login-form__input"/>
        <button className="login-form__button" onClick={this.handleLogin}>Log Into Your Account</button>
      </form>
    );
  }
}
