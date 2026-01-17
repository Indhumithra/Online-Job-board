// auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* 🔥 FIREBASE CONFIG */

const firebaseConfig = {
  apiKey: "AIzaSyAB9Zk-5p-LnIIxCcwTv0gkSvNRWuh2vu8",
  authDomain: "online-job-board-a1842.firebaseapp.com",
  projectId: "online-job-board-a1842",
  storageBucket: "online-job-board-a1842.firebasestorage.app",
  messagingSenderId: "620356158094",
  appId: "1:620356158094:web:170c9c144f7cbc1d837fdf",
  measurementId: "G-LCXND3S3HN"
};


/* 🔥 INIT FIREBASE */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase initialized");

/* ======================
   SIGN UP
====================== */
window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email and password required");
    return;
  }

  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    alert("Signup successful");
    console.log("User:", userCred.user.email);
    window.location.href = "jobs.html";
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

/* ======================
   LOGIN
====================== */
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email and password required");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful");
    window.location.href = "jobs.html";
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
