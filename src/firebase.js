import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJT3l4s4gGdOvk7DqSAMCZyCpxs3dxF6I",
  authDomain: "netflix-clone-5fce6.firebaseapp.com",
  projectId: "netflix-clone-5fce6",
  storageBucket: "netflix-clone-5fce6.appspot.com",
  messagingSenderId: "914930645045",
  appId: "1:914930645045:web:51000812624abe53fc597c",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
