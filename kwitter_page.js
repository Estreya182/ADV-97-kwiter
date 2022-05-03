//TUS ANLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDJ6mfjXBVClbqrQHkHx8NODnajDrIkDlA",
      authDomain: "class-test-ce68a.firebaseapp.com",
      databaseURL: "https://class-test-ce68a-default-rtdb.firebaseio.com",
      projectId: "class-test-ce68a",
      storageBucket: "class-test-ce68a.appspot.com",
      messagingSenderId: "410590327069",
      appId: "1:410590327069:web:a351ffdc80b8ba298b71f4"
    };
    // ADD YOUR FIREBASE LINKS
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");


function getData() { 
        



      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}


function updateLike(message_id)
{
      


}

function logOut()
{
  


      
}