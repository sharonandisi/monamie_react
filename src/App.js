import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Provider from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Fragment>
          <Navbar />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
