import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    toggle: false
  };

  toggleContact = e => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { name, email, phone } = this.props;
    const { toggle } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h1 className="card-title">
            {name}{" "}
            <button className="btn" onClick={this.toggleContact}>
              <i className="fas fa-caret-down" />
            </button>
          </h1>
          {toggle ? (
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Email: </strong>
                {email}
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> {phone}
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
