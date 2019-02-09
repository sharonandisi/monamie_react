import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return "Delete contact is clicked!";
    default:
      break;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Sam Kasyoki",
        email: "samkasyoki@yahoo.com",
        phone: "+254727479491"
      },
      {
        id: 2,
        name: "Cliff Nyendwe",
        email: "cnyendwe@gmail.com",
        phone: "+25472786430"
      },
      {
        id: 3,
        name: "Sharon Andisi",
        email: "sandisi@yahoo.com",
        phone: "+254712345678"
      }
    ]
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
