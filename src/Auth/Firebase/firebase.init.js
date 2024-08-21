// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe5cSMeYb_fOKXLDnJM_09ydoQzI-HClo",
  authDomain: "go-fast-travel.firebaseapp.com",
  projectId: "go-fast-travel",
  storageBucket: "go-fast-travel.appspot.com",
  messagingSenderId: "152582683155",
  appId: "1:152582683155:web:f9f676a6dc8985834a1de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export default auth;