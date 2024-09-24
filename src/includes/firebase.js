// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBl0KhX2J1Em8Y3TMKIvVFiNMvFNk566FY',
  authDomain: 'music-33c07.firebaseapp.com',
  projectId: 'music-33c07',
  storageBucket: 'music-33c07.appspot.com',
  messagingSenderId: '872543390857',
  appId: '1:872543390857:web:669d1fc35f5e989b4c8a58'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth();
const storage = getStorage()

export { db,auth,storage }
