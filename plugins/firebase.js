// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEgWrmKEUwvTVJwmxwZQ3YdVTYlhe8odw",
    authDomain: "fir-cy-65da6.firebaseapp.com",
    projectId: "fir-cy-65da6",
    storageBucket: "fir-cy-65da6.appspot.com",
    messagingSenderId: "996211122150",
    appId: "1:996211122150:web:1ae6e9fb55ba2832398027"

  // apiKey: "AIzaSyAwEZgccQrQUGhmz6kByftXaxIvErVYCQM",
  // authDomain: "tiktok-90b8f.firebaseapp.com",
  // databaseURL: "https://tiktok-90b8f-default-rtdb.firebaseio.com",
  // projectId: "tiktok-90b8f",
  // storageBucket: "tiktok-90b8f.appspot.com",
  // messagingSenderId: "543677547432",
  // appId: "1:543677547432:web:f502a3b62b4face2fd539d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firestore database lưu trữ csdl

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
