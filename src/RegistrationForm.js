import React from "react";

export default class RegistrationForm extends React.Component {
  render() {
    return(
      <form>
        <input type="text" name="username" placeholder="Username"/>
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Log in" />
      </form>
    );
  }
}
