/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Main from "../pages/Main";

firebase.initializeApp({
  apiKey: "AIzaSyCaEiG_sHndB-st3bA0c9vivJxmyALTCHU",
  authDomain: "mon-amie-78d91.firebaseapp.com"
});

class Auth extends Component {
  state = {
    isSignedIn: false
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user
      });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        {" "}
        {this.state.isSignedIn ? (
          <Main />
        ) : (
          // <span >
          //     <div > Signed In! </div>
          //     <button onClick = {() => firebase.auth().signOut()} > Sign out! </button>
          //     <h1 > Welcome {firebase.auth().currentUser.displayName} </h1>
          //     <img alt = "profile picture"src = {firebase.auth().currentUser.photoURL}/>
          // </span>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Auth;
