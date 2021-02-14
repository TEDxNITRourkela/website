import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

const configureFirebase = async () => {
  const response = await fetch('/__/firebase/init.json');
  const config = await response.json();
  firebase.initializeApp(config);
};

export const { firestore, analytics } = firebase;

export default configureFirebase;
