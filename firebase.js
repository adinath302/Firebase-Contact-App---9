// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbGNgPduVkp2EYUc_2oXgxfilZAPcRrnI",
  authDomain: "vite-contact-3b2a9.firebaseapp.com",
  projectId: "vite-contact-3b2a9",
  storageBucket: "vite-contact-3b2a9.appspot.com",
  messagingSenderId: "809789784233",
  appId: "1:809789784233:web:8786ab72d91611189429b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
