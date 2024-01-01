import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3cMZAk_egY7CXoEFh_2XBvk-3NWs_uFU",
  authDomain: "wearevelier.firebaseapp.com",
  projectId: "wearevelier",
  storageBucket: "wearevelier.appspot.com",
  messagingSenderId: "608372090219",
  appId: "1:608372090219:web:bb8640ea1878309469d82e",
  measurementId: "G-PFXFPZLS60"
};

// Verifica si ya hay una instancia de la aplicación
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export default firebase;

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };