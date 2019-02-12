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
        <div class="media w-75 mx-auto">
          <img src={image} alt={name} className="img-fluid" width="300" />
          <div class="media-body ml-3">
            <h5 class="mt-0">{name}</h5>
            {description}
            <h5 className="mt-3">Example</h5>
            {example}
          </div>
        </div>
      </div>
    );
  }
}

export default DailyWord;
