import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCAh02yNjURQKaBv4Z5xOr3FU9rXseWH9s",
    authDomain: "react-twitter-clone-bb015.firebaseapp.com",
    databaseURL: "https://react-twitter-clone-bb015.firebaseio.com",
    projectId: "react-twitter-clone-bb015",
    storageBucket: "react-twitter-clone-bb015.appspot.com",
    messagingSenderId: "428652025549",
    appId: "1:428652025549:web:f7c4dd0ccd695de987bb84",
    measurementId: "G-VC5N5GV99L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;



