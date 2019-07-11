import React from 'react';
import './App.scss';
import SearchForm from "./SearchForm";
import Navigation from "./Navigation"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={SearchForm} />
    </Router>
)}
