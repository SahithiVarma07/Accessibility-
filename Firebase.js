import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // put config
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, db };