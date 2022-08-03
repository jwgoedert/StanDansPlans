// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrRVNaxl9y542v3Yw7_SVCqu-3koZTWPg",
    authDomain: "standansplans.firebaseapp.com",
    projectId: "standansplans",
    storageBucket: "standansplans.appspot.com",
    messagingSenderId: "1085675458498",
    appId: "1:1085675458498:web:feb9b976e07813d1fcd05b",
    measurementId: "G-4E0YWJVWLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);