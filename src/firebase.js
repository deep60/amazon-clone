import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDGyczICT2JNNQH9MADBwei_dxYxVOL5vw",
    authDomain: "clone-53634.firebaseapp.com",
    projectId: "clone-53634",
    storageBucket: "clone-53634.appspot.com",
    messagingSenderId: "910652987392",
    appId: "1:910652987392:web:f640be8d6c9678d18920e5",
    measurementId: "G-5840PS5441"
  });

    const auth = firebase.auth();

  export { auth };