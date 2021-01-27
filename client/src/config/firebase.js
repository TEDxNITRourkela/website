import firebase from 'firebase/app';
import 'firebase/firestore';

const configureFirebase = async () => {
  if (process.env.NODE_ENV === 'production') {
    const response = await fetch('/__/firebase/init.json');
    const config = await response.json();
    firebase.initializeApp(config);
  } else {
    import('./keys').then(({ firebaseDevConfig }) =>
      firebase.initializeApp(firebaseDevConfig),
    );
  }
};
export default configureFirebase;
