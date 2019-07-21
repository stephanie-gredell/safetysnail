import React from "react";
import './LoginForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Auth from './Auth'
import { Redirect } from 'react-router'

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({
      emailError: this.state.email !== '' ? "" : "Need to enter a email",
      passwordError: this.state.password !== '' ? "" : "Need to enter a password"
    });
    Auth.login();
  }

  render() {
    if (Auth.isAuthenticated()) {
      return <Redirect to='/' />
    }

    return(
      <form className="login-form">
        <h1 className="login-form__header"><FontAwesomeIcon icon="key" className="registration-form__icon"/><i className="fal fa-route-highway"></i>Log Into Your Account</h1>
        <input type="text" name="email" placeholder="email" className="login-form__input" onChange={(event,newValue) => this.setState({email:newValue})}/>
        {this.state.emailError &&
          <p class="login-form__error"><FontAwesomeIcon icon="times-circle"/> {this.state.emailError}</p>
        }

        <input type="password" name="password" placeholder="Password" className="login-form__input" onChange={(event,newValue) => this.setState({password:newValue})}/>
        {this.state.passwordError &&
          <p class="login-form__error"><FontAwesomeIcon icon="times-circle"/> {this.state.passwordError}</p>
        }

        <button className="login-form__button" onClick={this.handleLogin}>Log Into Your Account</button>
      </form>
    );
  }
}
