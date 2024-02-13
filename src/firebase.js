import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmhMFfqJtC_w7JSSH8JgkJF6pVxb-71MA",
  authDomain: "ac-motor-vibration-monitoring.firebaseapp.com",
  projectId: "ac-motor-vibration-monitoring",
  storageBucket: "ac-motor-vibration-monitoring.appspot.com",
  messagingSenderId: "371201423057",
  appId: "1:371201423057:web:32dba06deec67a516377f0",
  measurementId: "G-JK3YDNMC2S"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, firebaseApp };