import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEpgZoPgzwQzzIU9TvMJ49vYA-hD7i8p8",
  authDomain: "pot-web-bcd13.firebaseapp.com",
  projectId: "pot-web-bcd13",
  storageBucket: "pot-web-bcd13.appspot.com",
  messagingSenderId: "61234045922",
  appId: "1:61234045922:web:5218afc8a7ba4a0b054fbb",
  measurementId: "G-MPCX82Y9V2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();

export { auth, firestore, analytics, db, googleAuthProvider };
