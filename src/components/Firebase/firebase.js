import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCaEiG_sHndB-st3bA0c9vivJxmyALTCHU",
    authDomain: "mon-amie-78d91.firebaseapp.com",
    databaseURL: "https://mon-amie-78d91.firebaseio.com",
    projectId: "mon-amie-78d91",
    storageBucket: "mon-amie-78d91.appspot.com",
    messagingSenderId: "217755066095"
};

class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    // Auth API

        // Sign Up
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

        // Login/SignIn
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
  }
  
  export default Firebase;