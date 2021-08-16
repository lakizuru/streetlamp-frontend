import "firebase/auth";
import "firebase/database"
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5qLpRlcNMt6J7uF1Ss1CjsCG2PQUe_CA",
  authDomain: "iotstreetlamp.firebaseapp.com",
  databaseURL: "https://iotstreetlamp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iotstreetlamp",
  storageBucket: "iotstreetlamp.appspot.com",
  messagingSenderId: "200888796350",
  appId: "1:200888796350:web:7646ee79ee92da07350aef"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    
    this.auth = firebase.auth();
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

var database = firebase.database();

export {database};

export default Firebase;