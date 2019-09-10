import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAux4bx8WpLqQO6iADbY23Qynvbmw7iY_8",
    authDomain: "crwn-db-816da.firebaseapp.com",
    databaseURL: "https://crwn-db-816da.firebaseio.com",
    projectId: "crwn-db-816da",
    storageBucket: "",
    messagingSenderId: "570181150180",
    appId: "1:570181150180:web:e742c3611e4d0a7c8e53f1"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore = firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

