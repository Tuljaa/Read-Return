
import firebase from 'firebase'
// import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDT9dYRLI46vVW6jFSp62akNmA3Rd99xGs",
    authDomain: "read-and-return.firebaseapp.com",
    projectId: "read-and-return",
    storageBucket: "read-and-return.appspot.com",
    messagingSenderId: "633778168334",
    appId: "1:633778168334:web:20f20ede1245ea10f1d25f",
    measurementId: "G-277R2SQJTQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.getAnalytics(app);

  export default firebase;