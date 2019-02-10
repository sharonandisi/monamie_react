import React, { Component } from "react";

class DailyWord extends Component {
  state = {
    id: 0,
    words: {
      word: "Banana",
      description: "yellow fruit",
      image: "banana.jpg"
    }
  };
  componentDidMount() {
    fetch("https://9a5vg2jktl.execute-api.us-east-1.amazonaws.com/prod")
      .then(res => res.json())
      .then(data => this.setState(data));
  }
  render() {
    const { word, description, image } = this.state.words;
    return (
      <div className="container">
        <h1>{word}</h1>
        <p>{description}</p>
        <img src={image} alt={word} />
      </div>
    );
  }
}

export default DailyWord;
