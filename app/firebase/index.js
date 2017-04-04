import firebase from 'firebase';
try {
  var config = {
    apiKey: "AIzaSyB45tqJnlAzQ1H0XNU5tSxPjJ3vUmBpw5I",
    authDomain: "udemy-todo-app-bdc89.firebaseapp.com",
    databaseURL: "https://udemy-todo-app-bdc89.firebaseio.com",
    projectId: "udemy-todo-app-bdc89",
    storageBucket: "udemy-todo-app-bdc89.appspot.com",
    messagingSenderId: "498598668471"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
