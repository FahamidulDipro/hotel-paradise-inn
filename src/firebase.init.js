// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiNovvXtFjOGaGMBBUv2_ptYV0v3uXte0",
  authDomain: "hotel-paradise-inn.firebaseapp.com",
  projectId: "hotel-paradise-inn",
  storageBucket: "hotel-paradise-inn.appspot.com",
  messagingSenderId: "528967801534",
  appId: "1:528967801534:web:b5401599c367c429301cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;