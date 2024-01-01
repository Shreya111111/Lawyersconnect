import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDkkWxipz056Heq72m1E4XdagjQE_ixj3A",
  authDomain: "lbscomp.firebaseapp.com",
  projectId: "lbscomp",
  storageBucket: "lbscomp.appspot.com",
  messagingSenderId: "751221151263",
  appId: "1:751221151263:web:e5556ea5fbe5e5af7ee72a",
  measurementId: "G-4DK06DE0VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
