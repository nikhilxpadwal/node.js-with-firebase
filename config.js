const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDAMJK1BBBUXX1fjflYNOenBID2_umxazQ",
  authDomain: "crud-operation-6b8c7.firebaseapp.com",
  projectId: "crud-operation-6b8c7",
  storageBucket: "crud-operation-6b8c7.appspot.com",
  messagingSenderId: "674616674792",
  appId: "1:674616674792:web:c7df0203c6bfda8cbb3c5d",
  measurementId: "G-DBGLRJJSSD"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
