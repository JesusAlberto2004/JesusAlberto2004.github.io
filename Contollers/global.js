
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup,FacebookAuthProvider} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDu6eB1XnfNVEnhMpc54pCZlgwhHAMxXPY",
  authDomain: "proyecto-de-clase-9f188.firebaseapp.com",
  projectId: "proyecto-de-clase-9f188",
  storageBucket: "proyecto-de-clase-9f188.appspot.com",
  messagingSenderId: "266169328614",
  appId: "1:266169328614:web:e3278f551a12cd3fc6ac27",
  measurementId: "G-ZFP3LKQJR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//gestiona la autentificación del usuario
const auth = getAuth(app);
const provider =new FacebookAuthProvider(auth);
const credential = FacebookAuthProvider.credentialFromResult(auth);
export const login_auth=(email,password)=>signInWithEmailAndPassword(auth, email, password);
export const UserCreate=(email,password)=>createUserWithEmailAndPassword(auth, email, password);
export const Logout=()=>signOut(auth);
export const observador=()=>onAuthStateChanged(auth, (user));
export const Popup=()=>signInWithPopup(auth, provider);
export const addcollection=(first,last,phone)=>addDoc(collection(db, "users"),{
  first,last,phone
});

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
export const getcollections=()=>getDocs(collection(db,"users"));
export const adduser=(id,first,last,phone,image)=>setDoc(doc(db, "usuarios", id), {
  id,first,last,phone,image
});
export const getsers=()=>getDocs(collection(db,"usuarios"));
export const updateuser=(id,first,last,phone)=>
  updateDoc(doc(db, "usuarios", id), {
    id,first,last,phone
});

export const additems=(id,tipo,nombre,precio,image)=>setDoc(doc(db, "productos", id), {
  id,tipo,nombre,precio,image
});
export const readitems=(id)=>
    getDoc(doc(db, "productos", id));
export const getitems=()=>getDocs(collection(db,"productos"));

export const updaitems=(id,tipo,nombre,precio)=>
  updateDoc(doc(db, "productos", id), {
    id,tipo,nombre,precio
  });
export const readuser=(id)=>
    getDoc(doc(db, "usuarios", id));
