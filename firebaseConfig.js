// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBlLAfzcPseCnS1V23OcxqP8jhvvrsYuiI",
  authDomain: "bmw-store-4dc29.firebaseapp.com",
  projectId: "bmw-store-4dc29",
  storageBucket: "bmw-store-4dc29.appspot.com",
  messagingSenderId: "317358180359",
  appId: "1:317358180359:web:e591bab3362626d67942a2",
  measurementId: "G-XQC014G2F0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
