import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './RegistrationForm.scss'

export default class RegistrationForm extends React.Component {
  render() {
    return(
      <div class="registration-form">

        <form>
          <h1 class="registration-form__header"><FontAwesomeIcon icon="key" className="registration-form__icon"/><i class="fal fa-route-highway"></i>Create Account</h1>
          <input type="text" name="username" placeholder="Username" class="registration-form__input"/>
          <input type="text" name="email"  placeholder="Email address" class="registration-form__input"/>
          <input type="password" name="password" placeholder="Enter a password"  class="registration-form__input"/>
          <input type="password" name="password-confirmation" placeholder="Enter password again"  class="registration-form__input"/>
          <button class="registration-form__button">Create Account</button>
        </form>
      </div>
    );
  }
}
