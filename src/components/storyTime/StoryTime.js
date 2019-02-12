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
        if (data.type === "story") {
          this.setState(data);
        }
      });
  }
  render() {
    const { title, image } = this.state.story;
    return (
      <div className="container s-time">
        <div className="row">
          <div className="col-md-12">
            <div className="card w-50 mx-auto">
              <img className="card-img-top" src={image} alt={title} />
              <div className="card-body">
                <h1 className="card-title">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
