import firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyAPlkcu0A-U4ZxdVnoxplZF42rfVA16OJo',
	authDomain: 'vue-pwa-profil.firebaseapp.com',
	databaseURL: 'https://vue-pwa-profil.firebaseio.com',
	projectId: 'vue-pwa-profil',
	storageBucket: 'vue-pwa-profil.appspot.com',
	messagingSenderId: '342672699459',
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

export {
  database,
  storage,
};
