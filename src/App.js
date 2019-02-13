import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";
import Provider from "./context";
import About from "./components/dailyWord/DailyWord";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlayTime from "./components/playTime/PlayTime";
import StoryTime from "./components/storyTime/StoryTime";
import MindMap from "./components/mindMap/MindMap";
// import Main from "./components/pages/Main";
import LandingPage from "./components/pages/LandingPage";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/word" component={About} />
              <Route exact path="/play" component={PlayTime} />
              <Route exact path="/story" component={StoryTime} />
              <Route exact path="/mind" component={MindMap} />
              <Route exact path="/auth" component={Auth} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
