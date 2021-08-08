import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5qLpRlcNMt6J7uF1Ss1CjsCG2PQUe_CA",
  authDomain: "iotstreetlamp.firebaseapp.com",
  projectId: "iotstreetlamp",
  storageBucket: "iotstreetlamp.appspot.com",
  messagingSenderId: "200888796350",
  appId: "1:200888796350:web:7646ee79ee92da07350aef",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
  {
      this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword = (email, password) =>
  {
      this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () =>
  {
      this.auth.signOut();
  }

  doCheckAuth = () =>
  {
      if(this.auth.currentUser){
        return true;
      }else{
        return false;
      }
  }

  doPasswordReset = email =>
  {
      this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate = password =>
  {
      this.auth.currentUser.updatePassword(password);
  }
}

export default Firebase;
