import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDWN0VAip529d68h6fcpenp0k-TVMTirEA",
  authDomain: "tik-tok-clone-ac564.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-ac564.firebaseio.com",
  projectId: "tik-tok-clone-ac564",
  storageBucket: "tik-tok-clone-ac564.appspot.com",
  messagingSenderId: "74202210865",
  appId: "1:74202210865:web:9401ac2efa9563aace2b10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db