import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const fbConfig = {
    apiKey: "AIzaSyCYYujT5McsumcEQ_Eb1UoY3Q6SnmSeyM0",
    authDomain: "lady-store-project.firebaseapp.com",
    databaseURL: "https://lady-store-project.firebaseio.com",
    projectId: "lady-store-project",
    storageBucket: "lady-store-project.appspot.com",
    messagingSenderId: "850481285592",
    appId: "1:850481285592:web:15abe1374ad78f65d3caad",
    measurementId: "G-R1ELZ1P86C"
};

firebase.initializeApp(fbConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;