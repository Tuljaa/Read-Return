
import firebase from 'firebase'
// import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcRf_8dor87ueTyyt6yFWs7bo3uyB67DY",
  authDomain: "read-return.firebaseapp.com",
  databaseURL: "https://read-return-default-rtdb.firebaseio.com/",
  projectId: "read-return",
  storageBucket: "read-return.appspot.com",
  messagingSenderId: "135841190686",
  appId: "1:135841190686:web:d36bd75a0c9ff68611ef0f",
  measurementId: "G-QJLM14YVYR"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.getAnalytics(app);

  export default firebase;