import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC54L37Bg5U7raUYvgsPN8Fy14PY_S7N6E",
  authDomain: "visit-car.firebaseapp.com",
  projectId: "visit-car",
  storageBucket: "visit-car.appspot.com",
  messagingSenderId: "344073284394",
  appId: "1:344073284394:web:74b37b81e3148fb144cc53"
};

const app = initializeApp(firebaseConfig);

export class environment {
}
