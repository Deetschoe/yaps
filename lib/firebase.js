import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GithubAuthProvider, getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJpVFUsOEcPrgZpzBsftZC8MLVvjbKrPo",
  authDomain: "yaps-acd42.firebaseapp.com",
  projectId: "yaps-acd42",
  storageBucket: "yaps-acd42.appspot.com",
  messagingSenderId: "630695532455",
  appId: "1:630695532455:web:0ecddba52fc28e3c6dc882",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GithubAuthProvider();

export { auth, provider, db };