import { initializeApp} from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyCkamDn-PPdHLOypyPfJoOz_kZk_HruQnI",
  authDomain: "si-accessibility.firebaseapp.com",
  projectId: "si-accessibility",
  storageBucket: "si-accessibility.appspot.com",
  messagingSenderId: "299504950297",
  appId: "1:299504950297:web:df2e9deeb7d1535aa0de88",
  measurementId: "G-HHB933PX4R"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, db };