// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
    initializeApp
} from 'firebase/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';



import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAj7HsFKiKbSDUVfOXR57clG7f2AkgFses",
    authDomain: "clone-d7bcf.firebaseapp.com",
    projectId: "clone-d7bcf",
    storageBucket: "clone-d7bcf.appspot.com",
    messagingSenderId: "755806892538",
    appId: "1:755806892538:web:f1913d35d8fd81ce11f443",
    measurementId: "G-JM9HKC0668"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export {
    db,
    auth
};