import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "myfreechat-36cb4.firebaseapp.com",
    projectId: "myfreechat-36cb4",
    storageBucket: "myfreechat-36cb4.appspot.com",
    databaseURL: "http://myfreechat-36cb4.firebaseio.com",
    messagingSenderId: "166020739834",
    appId: "1:166020739834:web:5e020134530b77f3618f43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }