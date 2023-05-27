import { FirebaseApp, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1bFUj-nnNHEE1QUG-EkuSu9ZIAAXgXyU",
    authDomain: "form-app-45414.firebaseapp.com",
    projectId: "form-app-45414",
    storageBucket: "form-app-45414.appspot.com",
    messagingSenderId: "585673564191",
    appId: "1:585673564191:web:2c5c66080567572154b52a",
    measurementId: "G-YT7PDNLL37",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
