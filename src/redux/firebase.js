import * as firebase from 'firebase'
const config = {
	apiKey: "AIzaSyAMlUtfMD3MlrTzRVrStp1Y_FHFhb0GDtQ",
	authDomain: "addresses-5efbe.firebaseapp.com",
	databaseURL: "https://addresses-5efbe.firebaseio.com",
	projectId: "addresses-5efbe",
	storageBucket: "addresses-5efbe.appspot.com",
	messagingSenderId: "263400878373"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('address/')