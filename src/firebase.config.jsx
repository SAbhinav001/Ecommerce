// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm9q29z_6M4v1uJhWTQ-WnvC9S73LcYjw",
  authDomain: "ecommerce-7a166.firebaseapp.com",
  projectId: "ecommerce-7a166",
  storageBucket: "ecommerce-7a166.appspot.com",
  messagingSenderId: "403647211316",
  appId: "1:403647211316:web:12f74af52cebc3421ce761"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider  = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
});
