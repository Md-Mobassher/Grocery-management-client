// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyD1pruIeq8rKqc3f_dy0SDtlCdAd-pKxiU",
    authDomain: "groca-grocery.firebaseapp.com",
    projectId: "groca-grocery",
    storageBucket: "groca-grocery.appspot.com",
    messagingSenderId: "701728501683",
    appId: "1:701728501683:web:6be62dfab807520f9725c6"

    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;