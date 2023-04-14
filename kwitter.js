function addUser()
{
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("name",user_name);
    window.location="kwitter_room.html";
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBFIShcLFZGqci5zaV5LuYC91OgojKYxRs",
//   authDomain: "kwitter-b0930.firebaseapp.com",
//   databaseURL: "https://kwitter-b0930-default-rtdb.firebaseio.com",
//   projectId: "kwitter-b0930",
//   storageBucket: "kwitter-b0930.appspot.com",
//   messagingSenderId: "289247073505",
//   appId: "1:289247073505:web:df1597177ea4f861c853a0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);