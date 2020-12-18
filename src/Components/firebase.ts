import firebase from 'firebase';

export const config = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAZX5VgMVNTyz-J_UUoCFuXIFK48pk7mzU",
        authDomain: "common-50c43.firebaseapp.com",
        databaseURL: "https://common-50c43.firebaseio.com",
        projectId: "common-50c43",
        storageBucket: "common-50c43.appspot.com",
        messagingSenderId: "670911494230",
        appId: "1:670911494230:web:f26064141b15840a75a3f7",
        measurementId: "G-LP8ZG3LZB4"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}