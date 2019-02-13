import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-orange">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Mon Ami
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/word" className="nav-link">
                  Daily Word
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/play" className="nav-link">
                  Play Time
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/story" className="nav-link">
                  Story Time
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/mind" className="nav-link">
                  Mind Map
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
