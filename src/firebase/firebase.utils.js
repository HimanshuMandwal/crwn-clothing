import firebase from 'firebase/app';
import 'firebase/firestore'; //here this both packages automatically attached to the firebase that we have wrote above
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBcSrUaBUu6XB56p2MKlg7ZojJw1e_DbuI",
  authDomain: "crwn-db-d4c5d.firebaseapp.com",
  databaseURL: "https://crwn-db-d4c5d-default-rtdb.firebaseio.com",
  projectId: "crwn-db-d4c5d",
  storageBucket: "crwn-db-d4c5d.appspot.com",
  messagingSenderId: "1017578012755",
  appId: "1:1017578012755:web:5ba9d584bd79371c9446a6",
  measurementId: "G-ZVZZD0BNMW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth part

const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({prompt: 'select_account'}); // this will set that we always want google pop whenewer want to login

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   //this to create the document in the firebase DB of any signed in user or newly
  // created user even though using the authentication we have signed the user but its data is not stored in our user doc at the firestore
  if(!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();


    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(e) {
      console.log(`error in creating user in Database ${e}`);
    }
  }
  return userRef;
  //docReference(can be used to perform crud operation) vs collectionRef
  // console.log(userAuth);
}