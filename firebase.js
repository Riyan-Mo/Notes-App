import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7sMli4tDaqvuK3lXxXqvLJYBI4N9GRzg",
  authDomain: "notes-app-f5682.firebaseapp.com",
  projectId: "notes-app-f5682",
  storageBucket: "notes-app-f5682.appspot.com",
  messagingSenderId: "261723383400",
  appId: "1:261723383400:web:18665ae415aa9104e87ddd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");