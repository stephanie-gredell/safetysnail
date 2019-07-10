import React from 'react';
import './App.scss';
import SearchForm from "./SearchForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={SearchForm} />
      </div>
    </Router>
}

export default App;
