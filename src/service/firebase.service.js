import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

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

export const getProductsFirebase = async () => {
  const queryRef = collection(db, "productList");
  const response = await getDocs(queryRef);
  const docsInfo = response.docs.map((doc) => {
    const newDoc = {
      id: doc.id,
      ...doc.data(),
    };
    return newDoc;
  });
  return docsInfo;
};

export const getOneProductFirebase = async (itemId) => {
  const queryRef = doc(db, "productList", itemId);
  const response = await getDoc(queryRef);
  const newDoc = {
    id: response.id,
    ...response.data(),
  };
  return newDoc;
};
