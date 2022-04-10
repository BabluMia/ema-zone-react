// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA0dsMFnOo84FLwmWYRPSXP5PZA4K4PHQ",
  authDomain: "ema-zone-react.firebaseapp.com",
  projectId: "ema-zone-react",
  storageBucket: "ema-zone-react.appspot.com",
  messagingSenderId: "583220831927",
  appId: "1:583220831927:web:643a132868d30f6fc34f32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;