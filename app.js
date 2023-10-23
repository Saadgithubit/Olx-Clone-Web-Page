const firebaseConfig = {
    apiKey: "AIzaSyDlg5H8sdJ0vn-NGrv9nG11iGYdZTlcyjE",
    authDomain: "olx-clone-9dbf6.firebaseapp.com",
    projectId: "olx-clone-9dbf6",
    storageBucket: "olx-clone-9dbf6.appspot.com",
    messagingSenderId: "419456133106",
    appId: "1:419456133106:web:264b67336374f3df13ed6b",
    measurementId: "G-FLTDFTPW78"
  };
 
  const frb = firebase.initializeApp(firebaseConfig);
 
 
  console.log(frb.auth)




  function signUp(){
      var email =document.getElementById('email').value
      var password =document.getElementById('password').value

      firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {

    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

function signIn(){
    var email =document.getElementById('logInEmail').value
      var password =document.getElementById('logInPassword').value

      firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {

    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}