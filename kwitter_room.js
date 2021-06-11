user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
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

console.log("inside1");
console.log("inside2");

function addRoom() {
  roomName = document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomName).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", roomName);
  window.location = "kwitter_page.html"
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("rooom_name");
  window.location="index.html";
}