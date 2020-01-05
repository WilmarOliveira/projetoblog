import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBNiLxQe_0QbKcAbYPZ6YYpJH2sWwL7YE8",
    authDomain: "reactapp-fb2ba.firebaseapp.com",
    databaseURL: "https://reactapp-fb2ba.firebaseio.com",
    projectId: "reactapp-fb2ba",
    storageBucket: "reactapp-fb2ba.appspot.com",
    messagingSenderId: "546317779912",
    appId: "1:546317779912:web:2d5e740123224af55076fd",
    measurementId: "G-4QXGP2F039"
  };
  

class Firebase {

    constructor() {
        //Inicializar firebase
        app.initializeApp(firebaseConfig);

        this.app = app.database();
    }

    login(email, senha) {
        return app.auth().signInWithEmailAndPassword(email, senha);
    }

    logout() {
        return app.auth().signOut();
    }

    async register(nome, email, senha) {
        await app.auth().createUserWithEmailAndPassword(email, senha);

        const uid = app.auth().currentUser.uid;

        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        });
    }

    isInitialized() {
        return new Promise(resolve => {
            return app.auth().onAuthStateChanged(resolve);
        });
    }

    getCurrent() {
        return app.auth().currentUser && app.auth().currentUser.email;
    }

    async getUserName(callback) {
        if(!app.auth().currentUser) {
            return null;
        }

        const uid = app.auth().currentUser.uid;
        await app.database().ref('usuarios').child(uid)
        .once('value').then(callback);
    }
}

export default new Firebase();