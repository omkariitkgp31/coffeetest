// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsKg19jZhoy5WeSSBE3msDGhGLSsoKBPI",
    authDomain: "coffeeland-9828e.firebaseapp.com",
    projectId: "coffeeland-9828e",
    storageBucket: "coffeeland-9828e.firebasestorage.app",
    messagingSenderId: "199504744286",
    appId: "1:199504744286:web:13362547a81f07e0bf89cf",
    measurementId: "G-LNDBGJ62W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
