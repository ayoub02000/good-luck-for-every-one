var firebaseConfig = {
    apiKey: "AIzaSyCVfF1tB-V05gJWoV6Duj2Idns16dMORIQ",
    authDomain: "lasfigas-c0e82.firebaseapp.com",
    databaseURL: "https://lasfigas-c0e82.firebaseio.com",
    projectId: "lasfigas-c0e82",
    storageBucket: "lasfigas-c0e82.appspot.com",
    messagingSenderId: "539498257534",
    appId: "1:539498257534:web:b90b9b15b5d744d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef= firebase.database().ref("a");
  document.getElementById("contactForm").addEventListener('submit',sumbitForm)
  function sumbitForm(e){
    e.preventDefault();
    var name=$("#name").val();
    var track=window.track.value;
    var email=window.email.value;
    var number=window.number.value;
    
    saveMessage(name,track,email,number);
};
function saveMessage(name,track,email,number){
   var newMessageRef =messagesRef.push();
   newMessageRef.set({
       name: name,
       email: email,
       track :track,
       number: number
   });
};