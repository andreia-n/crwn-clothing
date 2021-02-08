import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBz_0-g1YhqdTBlq7VbS4AuaPXWFgVwckk",
    authDomain: "crwn-db-823ad.firebaseapp.com",
    projectId: "crwn-db-823ad",
    storageBucket: "crwn-db-823ad.appspot.com",
    messagingSenderId: "746961291217",
    appId: "1:746961291217:web:3f422730a045dcbde1c2f0",
    measurementId: "G-M7HPDE1XKV"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    }catch(error){
        console.log('error creating user', error.message);
    }
  }

  return userRef;
};
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;