import React, { Component } from "react";

export default class Main extends Component {
  componentDidMount() {
    setInterval(() => {
      fetch("https://9a5vg2jktl.execute-api.us-east-1.amazonaws.com/prod")
        .then(res => res.json())
        .then(data => {
          if (data.type === "dashboard") {
            this.props.history.replace("/");
          } else if (data.type === "daily-word") {
            this.props.history.replace("/word");
          } else if (data.type === "play-time") {
            this.props.history.replace("/play");
          }
        });
    }, 3000);
  }
  render() {
    return (
      <div>
        <h1>Main Dashboard</h1>
      </div>
    );
  }
}
