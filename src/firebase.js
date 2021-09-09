import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAddelyp0maqUfC-ZxrtMqbvBKeH3f7P_U",
  authDomain: "clone-2caa0.firebaseapp.com",
  projectId: "clone-2caa0",
  storageBucket: "clone-2caa0.appspot.com",
  messagingSenderId: "326597303361",
  appId: "1:326597303361:web:9d5ae7ebdbd7ef8c047ac0"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};