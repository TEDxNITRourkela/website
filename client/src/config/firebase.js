import firebase from 'firebase/app';
import 'firebase/firestore';

const configureFirebase = async () => {
  const response = await fetch('/__/firebase/init.json');
  const config = await response.json();
  firebase.initializeApp(config);
};
export default configureFirebase;
