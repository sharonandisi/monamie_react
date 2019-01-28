import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3">
        <div className="container">
          <a href="/" className="navbar-brand">
            Mon Amie
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
