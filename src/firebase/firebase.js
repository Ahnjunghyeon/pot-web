import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcnBeHJNs-dFrYrYLvF2J99WqobQkEF8U",
  authDomain: "portfolio-web-jung.firebaseapp.com",
  projectId: "portfolio-web-jung",
  storageBucket: "portfolio-web-jung.appspot.com",
  messagingSenderId: "438877496106",
  appId: "1:438877496106:web:c5cfac923111cc87607453",
  measurementId: "G-C6GD9FQJE6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, firestore, googleAuthProvider };
