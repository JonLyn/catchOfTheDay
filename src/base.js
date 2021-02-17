import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWjo5M2Vxa2HfWaJezdB1QXstml1sFi1A",
    authDomain: "catch-of-the-day---jon.firebaseapp.com",
    databaseURL: "https://catch-of-the-day---jon-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

