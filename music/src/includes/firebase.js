import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVadhXzW_2uBXUhd6gASJ3_2VS3MWMt3M",
  authDomain: "music-da99c.firebaseapp.com",
  projectId: "music-da99c",
  storageBucket: "music-da99c.appspot.com",
  appId: "1:809140010161:web:fedc20550b2afb496ab690",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export { auth, db, usersCollection, songsCollection, storage, commentsCollection };
