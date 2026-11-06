// ============================================================
//  Buurtzorg Bingo: shared settings for the game and leaderboard
// ============================================================

// 1) Paste the config object from Firebase console:
//    Project settings > General > Your apps > Web app > "SDK setup and configuration" > Config
export const FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// 2) Session name. Every session has its own leaderboard AND resets every phone's card.
//    Use "rehearsal-1", "rehearsal-2" ... while practising, then switch to "live" before class.
export const SESSION_ID = "rehearsal-1";

// 3) Seconds a question stays locked after a wrong answer (0 = no waiting).
//    Without a wait, guessing A-B-C-D is faster than listening.
export const WRONG_COOLDOWN_SEC = 10;
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBD810suOU70NnU_Cip7v2isJB4koDYmx0",
    authDomain: "buurtzorg-bingo.firebaseapp.com",
    databaseURL: "https://buurtzorg-bingo-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "buurtzorg-bingo",
    storageBucket: "buurtzorg-bingo.firebasestorage.app",
    messagingSenderId: "760796514585",
    appId: "1:760796514585:web:2c974b5231d58731381d88",
    measurementId: "G-L920NER9EJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
