
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-e821c.firebaseapp.com",
  projectId: "fir-e821c",
  storageBucket: "fir-e821c.firebasestorage.app",
  messagingSenderId: "959583751603",
  appId: "1:959583751603:web:12104e2c4295ee43ea8fc6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}