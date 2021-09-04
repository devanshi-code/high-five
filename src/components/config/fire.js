import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyCbtNIjlpDYaCAiEcGSeKCJqIRXEzlH8gQ",
    authDomain: "high-five-9412b.firebaseapp.com",
    projectId: "high-five-9412b",
    storageBucket: "high-five-9412b.appspot.com",
    messagingSenderId: "552395882503",
    appId: "1:552395882503:web:1e80dea3c34c6da9a6aaa2",
    measurementId: "G-GG2L257JCP"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};