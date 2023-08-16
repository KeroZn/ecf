import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB69-DLI9BAU5gy0PDH8BiaDYa4reVri18",
  authDomain: "garage-v-parrot-ecf.firebaseapp.com",
  projectId: "garage-v-parrot-ecf",
  storageBucket: "garage-v-parrot-ecf.appspot.com",
  messagingSenderId: "156806295937",
  appId: "1:156806295937:web:0343d5182fbb5305a5b880",
  measurementId: "G-2M6PPTNB5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/***************************** */


/**************************** */

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const identifiant = loginForm['identifiant'].value;
    const password = loginForm['password'].value;

    firebase.auth().signInWithEmailAndPassword(name, password)
        .then((userCredential) => {
            // Connexion réussie, rediriger ou effectuer des actions nécessaires
            window.location.href = "tableau de bord.html";
        })
        .catch((error) => {
            // Gérer les erreurs d'authentification
            console.error('Erreur de connexion:', error);
        });
});
    


