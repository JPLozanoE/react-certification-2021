import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDRo2_r1cwgGqDYbt36cofLAmlHnpwJ2ss',
  authDomain: 'react-wizeline-e038f.firebaseapp.com',
  projectId: 'react-wizeline-e038f',
  storageBucket: 'react-wizeline-e038f.appspot.com',
  messagingSenderId: '650221054724',
  appId: '1:650221054724:web:75d7970d8f308e7da6be51',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
