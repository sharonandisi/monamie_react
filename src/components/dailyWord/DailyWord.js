import React, { Component } from "react";

class DailyWord extends Component {
  state = {
    word: {
      name: "",
      image: "",
      description: "",
      example: ""
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
    const { name, description, image, example } = this.state.word;
    return (
      <div className="d-word">
        <div class="media w-75 mx-auto pt-5">
          <img src={image} alt={name} className="img-fluid" width="300" />
          <div class="media-body ml-3 ml-5">
            <h5 class="mt-0 text-white">{name}</h5>
            <p className="text-white"> {description} </p>
            <h5 className="mt-3 text-white">Example</h5>
            <p className="text-white"> {example} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyWord;
