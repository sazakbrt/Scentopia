import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_lBVCCcMYAvAb1seKGj-yR1qIipZinpA",
    authDomain: "scentopia-9cd9f.firebaseapp.com",
    projectId: "scentopia-9cd9f",
    storageBucket: "scentopia-9cd9f.appspot.com",
    messagingSenderId: "393515922918",
    appId: "1:393515922918:web:946a431f0cccbd2360d227",
    measurementId: "G-723WJBC4VK"
  };
  
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);