import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCQNAmsmbkZBL6iHWnXqIV2tgZO7DmMSEg",
    authDomain: "clone-cbbed.firebaseapp.com",
    projectId: "clone-cbbed",
    storageBucket: "clone-cbbed.appspot.com",
    messagingSenderId: "272758692850",
    appId: "1:272758692850:web:8b97626a66e7d8d394e96b"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };