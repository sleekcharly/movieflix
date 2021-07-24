import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDx9rjJCdMW6HU7jRJeJJ1qjtBcZ5rPm98",
  authDomain: "movieflix-244e0.firebaseapp.com",
  projectId: "movieflix-244e0",
  storageBucket: "movieflix-244e0.appspot.com",
  messagingSenderId: "95573966018",
  appId: "1:95573966018:web:a5fbd20559cf5c2d5a8f5b"
};

const firebase = Firebase.initializeApp(config);

// run once at setup
// seedDatabase(firebase);

export { firebase };
