import React, { Component, Fragment } from 'react';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";

class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
            < Navbar / >
            <div className="container">
              <Switch>
                < Route exact path = "/" component = { Main } />
                < Route exact path = "/auth" component = { Auth } />
              </Switch>
            </div>
          </Fragment>
        </Router>
    );
  }
}

export default App;