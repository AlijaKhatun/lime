// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJV3qS0mvBrQCvBpUwmTEON4_ipk9aDtE',
  authDomain: 'lime-14e95.firebaseapp.com',
  projectId: 'lime-14e95',
  storageBucket: 'lime-14e95.firebasestorage.app',
  messagingSenderId: '454119583587',
  appId: '1:454119583587:web:d1716ab09fe3e19b102d56',
  measurementId: 'G-R361J6VHN6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default firebaseConfig;
