import React from 'react';
import './App.scss';
import RegistrationForm from "./RegistrationForm";
import Portal from "./Portal";
import LoginForm from "./LoginForm"
import Guest from "./Guest"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from './Auth';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab);

export default function App() {
  return (
    <Router>
      <Route exact path="/" render={() => (
        Auth.isAuthenticated() ? (
          <Portal />
        ) : (
          <Guest />
        )
      )}/>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegistrationForm} />
      <Route exact path="/settings" component={RegistrationForm} />
      <Route exact path="/users" component={RegistrationForm} />
      <Route exact path="/lists" component={RegistrationForm} />
    </Router>
)}
