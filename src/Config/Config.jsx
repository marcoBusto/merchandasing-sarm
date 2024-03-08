import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRm2lIbii7m3pN88CrWPaEs8E_YXb6YCg",
  authDomain: "proyectofinal-9c1f7.firebaseapp.com",
  databaseURL: "https://proyectofinal-9c1f7-default-rtdb.firebaseio.com",
  projectId: "proyectofinal-9c1f7",
  storageBucket: "proyectofinal-9c1f7.appspot.com",
  messagingSenderId: "27408017125",
  appId: "1:27408017125:web:feab25b3e514f5d139d60c",
  measurementId: "G-J4THLMY8PT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
