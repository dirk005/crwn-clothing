import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB58M8ARD4HfvUQKvb07hX2OdpdKzEDVdE",
  authDomain: "crwn-db-d7535.firebaseapp.com",
  projectId: "crwn-db-d7535",
  storageBucket: "crwn-db-d7535.appspot.com",
  messagingSenderId: "122700864316",
  appId: "1:122700864316:web:4de5d5767ef191d895dc39",
  measurementId: "G-MW9M57EZY0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;