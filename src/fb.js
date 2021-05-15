import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpzuvB6Q56tdeBdhXBwIqkcNdMSeWXwSo",
  authDomain: "lecturasutm.firebaseapp.com",
  projectId: "lecturasutm",
  storageBucket: "lecturasutm.appspot.com",
  messagingSenderId: "307872014435",
  appId: "1:307872014435:web:632e3db82b444efe195856",
  measurementId: "G-NKH6HTSW35"
};

export default !firebase.apps.length? firebase.initializeApp(firebaseConfig): firebase.app();
export const fb = firebase;