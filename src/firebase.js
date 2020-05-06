import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOE6sF12PVLVz5r7EoG-FjRe9diNHiGwc",
    authDomain: "venture-thinkink-forn.firebaseapp.com",
    databaseURL: "https://venture-thinkink-forn.firebaseio.com",
    projectId: "venture-thinkink-forn",
    storageBucket: "venture-thinkink-forn.appspot.com",
    messagingSenderId: "1094545959832",
    appId: "1:1094545959832:web:c587ae251bc352419359ed",
    measurementId: "G-RDDWGT80MF"
});

const db = firebaseApp.firestore();

// Export the database for components to use.
export { db }
