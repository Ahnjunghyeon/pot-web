import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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
const storage = getStorage(app);

export { storage };
