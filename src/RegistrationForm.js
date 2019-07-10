import React from "react";

export default class RegistrationForm extends React.Component {
  render() {
    return(
      <form>
        <input type="text" name="username" placeholder="Username"/>
        <input type="text" name="email"  placeholder="Email address"/>
        <input type="password" name="password" placeholder="Enter a password" />
        <input type="password" name="password-confirmation" placeholder="Enter password again" />
        <input type="submit" value="Log in" />
      </form>
    );
  }
}
