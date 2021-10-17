// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFNXqYhKQUWPgOdtBuHQc-QRT4eEQX05o",
  authDomain: "proyecto-dps-1a70c.firebaseapp.com",
  projectId: "proyecto-dps-1a70c",
  storageBucket: "proyecto-dps-1a70c.appspot.com",
  messagingSenderId: "707073818095",
  appId: "1:707073818095:web:1dff4043bbcbc5594aca1a"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };