import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWmEKZMAjR3KL-5fNzVy0lCdaVx25iyME",
    authDomain: "fda2020-828f2.firebaseapp.com",
    databaseURL: "https://fda2020-828f2.firebaseio.com",
    projectId: "fda2020-828f2",
    storageBucket: "fda2020-828f2.appspot.com",
    messagingSenderId: "90151837956",
    appId: "1:90151837956:web:f10423a823e761bd81b051",
    measurementId: "G-TGFV32LW3J"
});

const db = firebaseApp.firestore();

// Export the database for components to use.
export { db }
