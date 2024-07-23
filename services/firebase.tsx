import firebase from "firebase/compat/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbFKcNpmc9My6cHLIhiqy4EZVlg3YGxHs",
  authDomain: "sysdetran.firebaseapp.com",
  projectId: "sysdetran",
  storageBucket: "sysdetran.appspot.com",
  messagingSenderId: "381986456594",
  appId: "1:381986456594:web:4f07543f963a1e8c85c4cb",
  measurementId: "G-7SZPWTW5CW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app()
}

const database = firebase.database()

export {database, firebase}
