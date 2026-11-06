// ============================================================
//  Buurtzorg Bingo: shared settings for the game and leaderboard
// ============================================================

// Firebase project: buurtzorg-bingo
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBD810suOU70NnU_Cip7v2isJB4koDYmx0",
  authDomain: "buurtzorg-bingo.firebaseapp.com",
  projectId: "buurtzorg-bingo",
  storageBucket: "buurtzorg-bingo.firebasestorage.app",
  messagingSenderId: "760796514585",
  appId: "1:760796514585:web:2c974b5231d58731381d88"
};

// Session name. Every session has its own leaderboard AND resets every phone's card.
// Use "rehearsal-1", "rehearsal-2" ... while practising, then switch to "live" before class.
export const SESSION_ID = "rehearsal-2";

// Seconds a question stays locked after a wrong answer (0 = no waiting).
export const WRONG_COOLDOWN_SEC = 10;
