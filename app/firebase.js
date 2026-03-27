// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUbFTxLW297rwUBTFSnHfQx3dAaJRdiX8",
  authDomain: "tu-na-horta-count.firebaseapp.com",
  databaseURL: "https://tu-na-horta-count-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tu-na-horta-count",
  storageBucket: "tu-na-horta-count.firebasestorage.app",
  messagingSenderId: "198599151160",
  appId: "1:198599151160:web:9b8927bb557aae6532e0cd",
  measurementId: "G-D3K92JXYG6"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);