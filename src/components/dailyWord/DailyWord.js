import React, { Component } from "react";

class DailyWord extends Component {
  state = {
    words: {
      word: "",
      description: "",
      image: ""
    }
  };
  componentDidMount() {
    fetch("https://9a5vg2jktl.execute-api.us-east-1.amazonaws.com/prod")
      .then(res => res.json())
      .then(data => {
        if (data.id === 1) {
          //   this.setState(data);
        }
      });
  }
  render() {
    // const { word, description, image } = this.state.words;
    return (
      <div className="container">
        <h1>Daily word works</h1>
        {/* <h1>{word}</h1>
        <p>{description}</p>
        <img className="img-fluid" src={image} alt={word} /> */}
      </div>
    );
  }
}

export default DailyWord;
