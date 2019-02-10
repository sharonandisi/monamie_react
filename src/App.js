import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Provider from "./context";
import About from "./components/pages/DailyWord";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlayTime from "./components/playTime/PlayTime";
import StoryTime from "./components/storyTime/StoryTime";
import Main from "./components/pages/Main";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/about" component={About} />
                <Route exact path="/play" component={PlayTime} />
                <Route exact path="/story" component={StoryTime} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
