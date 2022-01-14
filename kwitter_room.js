var firebaseConfig = {
    apiKey: "AIzaSyDIqchHUz7RRDnaO0a_q_zh2zuiUeI9bSI",
    authDomain: "kwitter-hw-3dc3e.firebaseapp.com",
    projectId: "kwitter-hw-3dc3e",
    storageBucket: "kwitter-hw-3dc3e.appspot.com",
    messagingSenderId: "410092188637",
    appId: "1:410092188637:web:d7d33d19fd7f32a6abfc34"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome-" + user_name + "!";
  
  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr> ";
  document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location = "kwitter_page.html";
  }
  function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }
  