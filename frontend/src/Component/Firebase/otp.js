// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAHTee_DvPP68u1dmefBHHihi7wMXR95Fc",
    authDomain: "tp-verify.firebaseapp.com",
    projectId: "tp-verify",
    storageBucket: "tp-verify.firebasestorage.app",
    messagingSenderId: "28648510703",
    appId: "1:28648510703:web:08581a64f9fce55ef5f71a",
    measurementId: "G-H7EVRD1GNH"
    // apiKey: "AIzaSyAHTee_DvPP68u1dmefBHHihi7wMXR95Fc",
    // authDomain: "tp-verify.firebaseapp.com",
    // projectId: "tp-verify",
    // appId: "1:28648510703:web:08581a64f9fce55ef5f71a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
