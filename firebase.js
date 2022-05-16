import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSa1KHtMRwXFqEGj27payB2m85Tn0Wiw0",
  authDomain: "twittterr-clone.firebaseapp.com",
  projectId: "twittterr-clone",
  storageBucket: "twittterr-clone.appspot.com",
  messagingSenderId: "109006053524",
  appId: "1:109006053524:web:9b874b9964f5fc960a1481",
  measurementId: "G-2RZMKBDX6G",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
