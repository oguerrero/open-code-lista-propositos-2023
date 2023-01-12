// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxwKi4FzM44nntLu7v3tws3-pU3OIyUQE',
  authDomain: 'propositos-2023.firebaseapp.com',
  projectId: 'propositos-2023',
  storageBucket: 'propositos-2023.appspot.com',
  messagingSenderId: '292251640747',
  appId: '1:292251640747:web:f5f6f804f3376ca8d9a8ee',
  measurementId: 'G-BT4XRYM3MJ'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
