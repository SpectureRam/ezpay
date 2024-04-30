// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyDiJLm_KoHOW0fSZh8bcdBESnZoK-761kI",
  authDomain: "ezpay-a0cd1.firebaseapp.com",
  projectId: "ezpay-a0cd1",
  storageBucket: "ezpay-a0cd1.appspot.com",
  messagingSenderId: "701122248402",
  appId: "1:701122248402:web:0e3d57cc337d4e67afb70b",
  measurementId: "G-1XR115M5Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)