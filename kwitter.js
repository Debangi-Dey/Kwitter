// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA90WSwrvc0tKfec1y4DS9_4DDtg2mjV3U",
    authDomain: "chat-bot-e2c33.firebaseapp.com",
    databaseURL: "https://chat-bot-e2c33.firebaseio.com",
    projectId: "chat-bot-e2c33",
    storageBucket: "chat-bot-e2c33.appspot.com",
    messagingSenderId: "220431774364",
    appId: "1:220431774364:web:3d8b6ca383e91164ebb359",
    measurementId: "G-XJK9HQ065Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("username",username);
    console.log("inside1")
      firebase.database().ref("/").child(username).update({
          purpose: "adding user"
      });
      console.log("inside2")
    window.location="kwitter_room.html";
}