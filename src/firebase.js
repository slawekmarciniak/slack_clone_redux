// import { firebase } from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcbfaiC6c9HHz6doZg6uhI51pmSvn4m-o",
  authDomain: "slack-clone-reduxx.firebaseapp.com",
  projectId: "slack-clone-reduxx",
  storageBucket: "slack-clone-reduxx.appspot.com",
  messagingSenderId: "195499196881",
  appId: "1:195499196881:web:ae3efa2c47636f8441e0f0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db, app };
