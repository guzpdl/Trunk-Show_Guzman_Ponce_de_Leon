// import * as firebase from "firebase/app";
// import "firebase/firestore";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyAt_IDeJZbDokbAlB1i193nrLd4ytysKR0",
//   authDomain: "fren-supply.firebaseapp.com",
//   projectId: "fren-supply",
//   storageBucket: "fren-supply.appspot.com",
//   messagingSenderId: "447618822651",
//   appId: "1:447618822651:web:373d8a6bd1830f31ca5b5e",
// });

// export const getFirebase = () => {
//   return app;
// };
// export const getFirestore = () => {
//   return firebase.firestore(app);
// };

import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAt_IDeJZbDokbAlB1i193nrLd4ytysKR0",
  authDomain: "fren-supply.firebaseapp.com",
  projectId: "fren-supply",
  storageBucket: "fren-supply.appspot.com",
  messagingSenderId: "447618822651",
  appId: "1:447618822651:web:373d8a6bd1830f31ca5b5e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productRef = doc(db, "productList");
getDoc(productRef).then((snapshot) => {
  console.log(snapshot);
});

// ESTO NO ESTA FUNCIONANDOOOOOOOOOOOOOOOOOOOOOOOOO
