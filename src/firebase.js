// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKERb0C86_GcyOUg3WbasPwkUZ9PYSL9I",
  authDomain: "slack-clone-15921.firebaseapp.com",
  projectId: "slack-clone-15921",
  storageBucket: "slack-clone-15921.appspot.com",
  messagingSenderId: "271716371979",
  appId: "1:271716371979:web:2fa828c1da2e3dda90410e",
  measurementId: "G-JMYHSXSF6Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
