import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCng0WIGTUBiRU692Mc-0uu1acDfo-dSXg",
    authDomain: "test-98b19.firebaseapp.com",
    projectId: "test-98b19",
    storageBucket: "test-98b19.appspot.com",
    messagingSenderId: "526490138137",
    appId: "1:526490138137:web:c3a0c4627aa8254a1e9c88"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
