import firebase from 'firebase/app';
import 'firebase/firestore';

const configureFirebase = async () => {
  if (process.env.NODE_ENV === 'production') {
    const response = await fetch('/__/firebase/init.json');
    const config = await response.json();
    firebase.initializeApp(config);
  } else {
    const firebaseDevConfig = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
    };

    firebase.initializeApp(firebaseDevConfig);
  }
};
export default configureFirebase;
