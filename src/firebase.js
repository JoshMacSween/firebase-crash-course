import firebase from 'firebase/app'
import 'firebase/auth'

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// })
// export const auth = app.auth()
// export default app

const app = firebase.initializeApp({
  apiKey: "AIzaSyBc0Z3V1CVedvBEnlBlK215Tg-zDaaMQwo",
  authDomain: "learning-firebase-a26f0.firebaseapp.com",
  databaseURL: "https://learning-firebase-a26f0.firebaseio.com",
  projectId: "learning-firebase-a26f0",
  storageBucket: "learning-firebase-a26f0.appspot.com",
  messagingSenderId: "545190643134",
  appId: "1:545190643134:web:7e96960309305e5c51e5ef"
});
// Initialize Firebase
export const auth = app.auth()
export default app
