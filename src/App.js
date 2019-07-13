import React from 'react';
import './App.scss';
import RegistrationForm from "./RegistrationForm";
import Portal from "./Portal";
import LoginForm from "./LoginForm"
import Navigation from "./Navigation"
import YoutubeSearch from "./YoutubeSearch"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router'
import Cookies from 'universal-cookie';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab);

export default function App() {
  const cookies = new Cookies();
  cookies.set('login',"test");
  const loggedInCookie = cookies.get('login');
  const isLoggedIn = typeof loggedInCookie !== 'undefined';

  return (

    <Router>
      {/* check if user is logged in */}
      <Navigation />
      <Route exact path="/" render={() => (
        isLoggedIn ? (
          <Portal />
        ) : (
          <Redirect to="/login"/>
        )
      )}/>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegistrationForm} />
      <Route exact path="/search/youtube" component={YoutubeSearch} />

    </Router>
)}
