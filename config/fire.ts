import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyASttzDcH8u_buXqu4DQXh8ykf4ZGKxFng',
  authDomain: 'api-challenge-a70e1.firebaseapp.com',
  projectId: 'api-challenge-a70e1',
  storageBucket: 'api-challenge-a70e1.appspot.com',
  messagingSenderId: '68087999930',
  appId: '1:68087999930:web:cc474a61b03ffe94cf4183',
}

const fire = firebase.initializeApp(firebaseConfig)

//export const db = firebase.database();
export default fire
