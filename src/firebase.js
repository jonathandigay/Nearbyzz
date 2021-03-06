import firebase from "firebase/app";
require("firebase/storage");
require("firebase/auth");
require("firebase/firestore");

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();

export const Google = new firebase.auth.GoogleAuthProvider();
export const Facebook = new firebase.auth.FacebookAuthProvider();
export default app;
