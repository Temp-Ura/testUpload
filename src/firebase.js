import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVOYEbn5tGFqEWJQuNN1QDvoV8rnPgPrs",
    authDomain: "venture-thinking.firebaseapp.com",
    databaseURL: "https://venture-thinking.firebaseio.com",
    projectId: "venture-thinking",
    storageBucket: "venture-thinking.appspot.com",
    messagingSenderId: "937783086999",
    appId: "1:937783086999:web:0759c8d5d6e82c8af93ed2",
    measurementId: "G-LTC7HSREJS"
});

const db = firebaseApp.firestore();

// Export the database for components to use.
export { db }
