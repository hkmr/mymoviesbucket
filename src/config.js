import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvtlY-35La7ClolNx-e0mWHl26fIsxvhA",
  authDomain: "moviebuckets-e5d25.firebaseapp.com",
  databaseURL: "https://moviebuckets-e5d25.firebaseio.com",
  projectId: "moviebuckets-e5d25",
  storageBucket: "moviebuckets-e5d25.appspot.com",
  messagingSenderId: "264503379841",
  appId: "1:264503379841:web:8858cdd3dd84819c270a80",
  measurementId: "G-YELT2MESCX"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
