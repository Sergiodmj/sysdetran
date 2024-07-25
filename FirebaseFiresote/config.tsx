import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAbFKcNpmc9My6cHLIhiqy4EZVlg3YGxHs",
  authDomain: "sysdetran.firebaseapp.com",
  databaseURL: "https://sysdetran-default-rtdb.firebaseio.com",
  projectId: "sysdetran",
  storageBucket: "sysdetran.appspot.com",
  messagingSenderId: "381986456594",
  appId: "1:381986456594:web:4f07543f963a1e8c85c4cb",
  measurementId: "G-7SZPWTW5CW",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

