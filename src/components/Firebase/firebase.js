import app from 'firebase/app';
import 'firebase/auth';
var config = {
    apiKey: "AIzaSyATaBfK4dmCtK6vySq7xvSvunQonoVos4Q",
    authDomain: "web-demo-ca2d3.firebaseapp.com",
    databaseURL: "https://web-demo-ca2d3.firebaseio.com",
    projectId: "web-demo-ca2d3",
    storageBucket: "web-demo-ca2d3.appspot.com",
    messagingSenderId: "442090786804"
  };
  class Firebase {
      constructor() {
          app.initializeApp(config);
          this.auth = app.auth();
      }

        // *** Authentication API ***
        
        doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
        doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
        doSignOut = () => this.auth.signOut();
        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
        doPasswordUpdate = password =>this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;