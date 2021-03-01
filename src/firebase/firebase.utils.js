import firebase from 'firebase/app';
import 'firebase/firestore'; //here this both packages automatically attached to the firebase that we have wrote above
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBcSrUaBUu6XB56p2MKlg7ZojJw1e_DbuI",
  authDomain: "crwn-db-d4c5d.firebaseapp.com",
  projectId: "crwn-db-d4c5d",
  storageBucket: "crwn-db-d4c5d.appspot.com",
  messagingSenderId: "1017578012755",
  appId: "1:1017578012755:web:5ba9d584bd79371c9446a6",
  measurementId: "G-ZVZZD0BNMW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);