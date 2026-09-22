import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "voice-agent-60780.firebaseapp.com",
  projectId: "voice-agent-60780",
  storageBucket: "voice-agent-60780.firebasestorage.app",
  messagingSenderId: "171711759765",
  appId: "1:171711759765:web:fc50a6922ef5007beca29c",
  measurementId: "G-FC1HDRND2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

