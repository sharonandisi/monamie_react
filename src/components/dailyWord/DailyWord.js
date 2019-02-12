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
        if (data.type === "daily-word") {
          this.setState(data);
        }
      });
  }
  render() {
    const { name, description, image, example } = this.state.word;
    return (
      <div className="container d-word">
        <div className="row">
          <div className="col-md-12">
            <div className="card w-25 mx-auto">
              <img className="card-img-top" src={image} alt={name} />
              <div className="card-body">
                <h1 className="card-title">Word of the Day</h1>
                <h3 className="card-subtitle">
                  Today's word is <strong>{name}</strong>
                </h3>
                <div className="mt-3">
                  <span>
                    <strong>Definition:</strong>
                  </span>
                  <p className="d-inline-block card-text">{description}.</p>
                  <span>
                    <strong>Example:</strong>
                  </span>
                  <p className="card-text">{example}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyWord;
