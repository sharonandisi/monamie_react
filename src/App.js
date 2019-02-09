import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Provider from "./context";
import Contacts from "./components/contacts/Contacts";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
