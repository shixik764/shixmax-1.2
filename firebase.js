// ---------------------
// Firebase CONFIG
// ---------------------

const firebaseConfig = {
    apiKey: "AIzaSyAEHPyMzxzCzOafQK0GrHQX3VObfZhaIBQ",
    authDomain: "shixmax-9fa29.firebaseapp.com",
    databaseURL: "https://shixmax-9fa29-default-rtdb.firebaseio.com",
    projectId: "shixmax-9fa29",
    storageBucket: "shixmax-9fa29.appspot.com",
    messagingSenderId: "1010580392768",
    appId: "1:1010580392768:web:523bfdc415f821deae48a5"
};

// ---------------------
// Firebase INIT
// ---------------------

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

console.log("Firebase initialized");
