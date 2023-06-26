// import firbase module
//import specific module called app from firebase
// app module is the core of firebase SDK
import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'  //not import 'firebase/database'  database is for old verion of databse whereas firestore is new database , database is for real time database  
import 'firebase/storage';  //for audio file upload in storage

const firebaseConfig = {
    apiKey: "AIzaSyDgEccqvESiTfpgOzmIEdTVyJgLF8hsahw",  //How we will be able to connect to firebase(to inform firebase we are the one sending request to firebase not someone else)
    authDomain: "music-75597.firebaseapp.com", //firebase provides URL where we can send authentication info. It is needed if we want to add aunthentication to our app 
    projectId: "music-75597",
    storageBucket: "music-75597.appspot.com",  //bucket is used to describe the location where the files are stored
    appId: "1:706513215087:web:873f5eedf469c7cb0cf79a"  //firebase allows multiple apps to be connected to our project
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage(); //for audio file upload in storage

db.enablePersistence().catch((error) => {
    console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users');  //db.collection has one argument which is the name of the collection to select
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
    auth, db,
    usersCollection,
    songsCollection,
    commentsCollection,
    storage,

};

//In this file we have integrated firebase SDK in our project