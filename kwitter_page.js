//YOUR FIREBASE LINKS
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
username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(message_data);
                        console.log(firebase_message_id);
                        msg = message_data['message'];
                        Name = message_data['name'];
                        like = message_data['like'];
                        n1 = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
                        n2 = "<h4 class='message_h4'>" + msg + "</h4>";
                        n3 = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='update_like(this.id)'>";
                        n4 = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = n1 + n2 + n3 + n4;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function update_like(message_id) {
      button_id = message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      });
}

function send() {
      msg = document.getElementById("msg").value;
      console.log(username);
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("rooom_name");
      window.location = "index.html";
}

function back(){
      window.location="kwitter_room.html"
}