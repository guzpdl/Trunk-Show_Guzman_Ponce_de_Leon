import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAt_IDeJZbDokbAlB1i193nrLd4ytysKR0",
  authDomain: "fren-supply.firebaseapp.com",
  projectId: "fren-supply",
  storageBucket: "fren-supply.appspot.com",
  messagingSenderId: "447618822651",
  appId: "1:447618822651:web:373d8a6bd1830f31ca5b5e",
});

export const getFirebase = () => {
  return app;
};
export const getFirestore = () => {
  return firebase.firestore(app);
};
