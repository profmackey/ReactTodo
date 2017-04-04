import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyB45tqJnlAzQ1H0XNU5tSxPjJ3vUmBpw5I",
  authDomain: "udemy-todo-app-bdc89.firebaseapp.com",
  databaseURL: "https://udemy-todo-app-bdc89.firebaseio.com",
  projectId: "udemy-todo-app-bdc89",
  storageBucket: "udemy-todo-app-bdc89.appspot.com",
  messagingSenderId: "498598668471"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'James',
    age: 25
  }
});

var notesRef = firebaseRef.child('notes');

var newNoteRef = notesRef.push({
  text: 'Walk the dog 2'
});
