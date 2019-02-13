import React, { Component } from "react";

export default class StoryTime extends Component {
  state = {
    story: {
      title: "",
      image: "",
      description: ""
    }
  };
  componentDidMount() {
    fetch("https://9a5vg2jktl.execute-api.us-east-1.amazonaws.com/prod")
      .then(res => res.json())
      .then(data => {
        this.setState(data);
      });
  }
  render() {
    const { title, image } = this.state.story;
    return (
      <div className="pt-5 bg-light-success">
        <div className="w-50 mx-auto">
          <img className="img-fluid text-center" src={image} alt={title} />
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}
