import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDijpTmO-w0lSxsrEcHYmb8W8ubWIUnKXw",
  authDomain: "autenticacion-firebase-305c8.firebaseapp.com",
  projectId: "autenticacion-firebase-305c8",
  storageBucket: "autenticacion-firebase-305c8.appspot.com",
  messagingSenderId: "945821793210",
  appId: "1:945821793210:web:ce8d008634f08f147cfb83",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();

export { auth };
