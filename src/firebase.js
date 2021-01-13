import store from './store'
import * as firebase from 'firebase'

const configOptions = {
    apiKey: "AIzaSyArw7Z3Jfg3K-3_qR5mgV4lMccT5sZHAtY",
    authDomain: "prueba-cuidades.firebaseapp.com",
    projectId: "prueba-cuidades",
    storageBucket: "prueba-cuidades.appspot.com",
    messagingSenderId: "588424032257",
    appId: "1:588424032257:web:14c76a692a8053f98f1000",
    measurementId: "G-CNP4DTCD5Z"
};

firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user =>{
    store.dispatch('getUser',user);
});

firebase.getCurrentUser = () =>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        },reject)
    })
};

export default firebase;