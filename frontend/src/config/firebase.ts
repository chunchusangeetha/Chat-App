import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCckR6ZkQgGwzvFNCvflGUwJ10G5rhZE6E",
    authDomain: "chat-app-d6263.firebaseapp.com",
    projectId: "chat-app-d6263",
    storageBucket: "chat-app-d6263.appspot.com",
    messagingSenderId: "640005393401",
    appId: "1:640005393401:web:7ae92a385a9091129fcb28",
    measurementId: "G-9FHYYJ1JEC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
