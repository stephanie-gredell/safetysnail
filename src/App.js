import React from 'react';
import './App.scss';
import RegistrationForm from "./RegistrationForm";
import SearchForm from "./SearchForm";
import LoginForm from "./LoginForm"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router'
import Cookies from 'universal-cookie';

export default function App() {
  const cookies = new Cookies();
  const loggedInCookie = cookies.get('login');
  const isLoggedIn = typeof loggedInCookie !== 'undefined';

  return (
    <Router>
      {/* check if user is logged in */}
      <Route exact path="/" render={() => (
        isLoggedIn ? (
          <Redirect to="/search/youtube"/>
        ) : (
          <Redirect to="/login"/>
        )
      )}/>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegistrationForm} />
      <Route exact path="/search/youtube" component={SearchForm} />
    </Router>
)}
