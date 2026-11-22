/* firebase-config.js · Webseite Finanz- und Rechnungswesen, DHBW Stuttgart, Dr. Christian Neusser
   Live-Quiz, Prozesskosten-Challenge und Fragen-Board speichern in der Firebase Realtime Database
   unter dem Pfad "refi/". Eingetragen ist das bestehende Projekt aus der Osnabrück-Seite.
   Regeln in Firebase (Realtime Database > Regeln), nur der Pfad refi ist offen:
   {
     "rules": {
       "refi": { ".read": true, ".write": true },
       "rooms": { ".read": true, ".write": true }
     }
   }
   Ein eigenes Projekt (z. B. "dhbw-refi") ist sauberer: Werte unten ersetzen, Region europe-west1. */
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyA5NGTuVJS03zx5qAzdWLpayHa_aD3uJVk",
  authDomain:        "osnabrueck-quiz.firebaseapp.com",
  databaseURL:       "https://osnabrueck-quiz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "osnabrueck-quiz",
  storageBucket:     "osnabrueck-quiz.firebasestorage.app",
  messagingSenderId: "657293657830",
  appId:             "1:657293657830:web:7e30c1a02a28fc066ddd27"
};
