
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
        apiKey: "AIzaSyBFIShcLFZGqci5zaV5LuYC91OgojKYxRs",
        authDomain: "kwitter-b0930.firebaseapp.com",
        databaseURL: "https://kwitter-b0930-default-rtdb.firebaseio.com",
        projectId: "kwitter-b0930",
        storageBucket: "kwitter-b0930.appspot.com",
        messagingSenderId: "289247073505",
        appId: "1:289247073505:web:df1597177ea4f861c853a0"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;
});});}
getData();

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      // localStorage.setItem("room_name", room_name);

      // window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location="index.html";
}


