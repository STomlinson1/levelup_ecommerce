import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyCViLOlzq2i6C83JMD3NDUV1q-4U8PB_d8',
	authDomain        : 'levelup-e8207.firebaseapp.com',
	databaseURL       : 'https://levelup-e8207.firebaseio.com',
	projectId         : 'levelup-e8207',
	storageBucket     : 'levelup-e8207.appspot.com',
	messagingSenderId : '248726199193',
	appId             : '1:248726199193:web:228b979af647d1e3849108',
	measurementId     : 'G-7YRGMKXQH1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
