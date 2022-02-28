import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBXntF63ZTARQ5B2tW2Cvjb421hXr5pGXE",
  authDomain: "login-smk.firebaseapp.com",
  projectId: "login-smk",
  storageBucket: "login-smk.appspot.com",
  messagingSenderId: "138094848838",
  appId: "1:138094848838:web:a0dae3a828f9d937929347",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
