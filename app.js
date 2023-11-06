var logInBtn = document.getElementById('logIn-button')

getData()

function getData(){
  
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {
  const products = res.products
  const container = document.getElementById('allProducts')

  console.log(products);
  for (let i = 0; i < products.length; i++){
    const card = document.createElement('div')
    card.className = 'card-div'
    card.onclick = function (){
      window.location.href = './src/productsdata/products.html?productId=' + products[i].id
    }
    const images = document.createElement('img')
    images.src = products[i].thumbnail
    const title = document.createElement('h4')
    title.innerHTML = products[i].title
    const price = document.createElement('h5')
    price.innerHTML = products[i].price
    card.append(images)
    card.append(title)
    card.append(price)
    container.append(card)

  }
});
}


const userData = JSON.parse(localStorage.getItem('users'))



for(var i=0; i < userData.length; i++){
  logInBtn.innerHTML = userData[i].fullName
  break
}

// function changeLocation(){
//   var logInBtn = document.getElementById('logIn-button')
  
//   // logInBtn.addEventListener('click')
//  console.log(logInBtn) 
// //   var signUpPage = window.location.href = 'src/signin.html'

// //   window.location.href = signUpPage
// }




// const firebaseConfig = {
//     apiKey: "AIzaSyDlg5H8sdJ0vn-NGrv9nG11iGYdZTlcyjE",
//     authDomain: "olx-clone-9dbf6.firebaseapp.com",
//     projectId: "olx-clone-9dbf6",
//     storageBucket: "olx-clone-9dbf6.appspot.com",
//     messagingSenderId: "419456133106",
//     appId: "1:419456133106:web:264b67336374f3df13ed6b",
//     measurementId: "G-FLTDFTPW78"
//   };
 
//   const frb = firebase.initializeApp(firebaseConfig);
 
 
//   console.log(frb.auth)

//   // start()

//   // stop(start())


//   function signUp(){
//       var email =document.getElementById('email').value
//       var password =document.getElementById('password').value
     

//       firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {

//     var user = userCredential.user;
//     if(user){
//       window.location = './signin.html'
//     }
//     else{
//       alert('Please fill All Fields')
//     }
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//   });
// }

// function signIn(){
//     var email =document.getElementById('logInEmail').value
//       var password =document.getElementById('logInPassword').value
//   window.location = './index.html'
//       firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {

//     var user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//   });
// }


// function start(){
//  return window.location.href = './signup.html'
// }