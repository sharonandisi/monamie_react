import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-danger mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contact Manager
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
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts" className="nav-link">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
