import React, { Component } from "react";

export default class LandingPage extends Component {
  //   componentDidMount() {
  //     setInterval(() => {
  //       fetch("https://9a5vg2jktl.execute-api.us-east-1.amazonaws.com/prod")
  //         .then(res => res.json())
  //         .then(data => {
  //           if (data.type === "dashboard") {
  //             this.props.history.replace("/");
  //           } else if (data.type === "landing-page") {
  //             this.props.history.replace("/");
  //           } else if (data.type === "daily-word") {
  //             this.props.history.replace("/word");
  //           } else if (data.type === "play-time") {
  //             this.props.history.replace("/play");
  //           } else if (data.type === "story") {
  //             this.props.history.replace("/story");
  //           }
  //         });
  //     }, 3000);
  //   }
  render() {
    return (
      <div className="l-page">
        <div className="text-white l-center">
          <h1>Welcome to Mon Ami</h1>
          <div className="l-ul">
            <p>You can navigate to:</p>
            <ul>
              <em>
                <li>Daily Word</li>
                <li>Story Time</li>
                <li>Play Time</li>
              </em>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
