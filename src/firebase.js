import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgOiysE_MgXEbXN6CgdaXMTTI-fm4FtRY",
  authDomain: "szukam-ekipy-do.firebaseapp.com",
  projectId: "szukam-ekipy-do",
  storageBucket: "szukam-ekipy-do.appspot.com",
  messagingSenderId: "309435011996",
  appId: "1:309435011996:web:17af2e39dd0578841eae59",
  measurementId: "G-EKQSPVDDDB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
