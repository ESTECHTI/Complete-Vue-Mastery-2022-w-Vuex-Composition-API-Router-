import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVadhXzW_2uBXUhd6gASJ3_2VS3MWMt3M",
  authDomain: "music-da99c.firebaseapp.com",
  projectId: "music-da99c",
  storageBucket: "music-da99c.appspot.com",
  appId: "1:809140010161:web:fedc20550b2afb496ab690",
};

export default firebase.initializeApp(firebaseConfig);
