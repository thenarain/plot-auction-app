import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDnm4uz9mjWNkyG91wgQaA2wiRqN69oUJ8",
    authDomain: "plot-auction-app.firebaseapp.com",
    projectId: "plot-auction-app",
    storageBucket: "plot-auction-app.appspot.com",
    messagingSenderId: "828727267768",
    appId: "1:828727267768:web:b687c6458fce61312bbf4d",
    measurementId: "G-GQEG3T311B"
  };

initializeApp(firebaseConfig);
var auth = getAuth();
var provider = new GoogleAuthProvider();

export { auth, provider };
