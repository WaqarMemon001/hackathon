// SignUp panel

// let user_name = document.getElementById("name").value
// let email = document.getElementById('email').value
// let password = document.getElementById('password').value
// let country = document.getElementById('country').value
// let city = document.getElementById('city').value
// let phoneno = document.getElementById('phoneno').value
// let select = document.getElementById('select').value

const login = () =>{

  var useremail = document.getElementById('loginemail').value
  var userpassword = document.getElementById('password').value
  
  firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
          .then((userCredential) => {
            var user = userCredential.user;
  
            // Adding current user in local Storage to utilize user info in UI
            localStorage.setItem('Current_user_ID' ,user.uid)
            localStorage.setItem('Current_user_name' ,user.uid)
  
            var currentUserId = localStorage.getItem('Current_user_ID')
  
              console.log(currentUserId)
  
              // Search ID within Resturant collection
              firebase.database().ref().child('Resturants').orderByChild('uid').equalTo(currentUserId).once('value')
              .then((snap) => {
                  var data = snap.toJSON();
  
                  if (data == null) {
                      // Search ID within Users collection
                      firebase.database().ref().child('User').orderByChild('uid').equalTo(currentUserId).once('value')
                      .then((snap) => {
                          var data = snap.toJSON();
                           // This is a User so we take it to Ordering page.
                           window.location='restaurant.html'            
                      });
                  }
                  else{
                      // This is a Resturant owner so we take it to the dashboard
                      window.location='dashboard.html' 
                  }
              });
      })
  }



const Signupuser = () => {
  let user_name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let country = document.getElementById('country').value
  let city = document.getElementById('city').value
  let phoneno = document.getElementById('phoneno').value
  console.log(password)
  if (email == '' || user_name == '' || password == "" || phoneno == "" || country == "" || city == "") {
    alert("Enter Correct Values")
  } else {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user.uid)
        // ...

        var obj = {
          name: user_name,
          email: email,
          password: password,
      
          country: country,
          city: city,
          phoneno: phoneno,
          uid: user.uid
        }
        firebase.database().ref('/User').child(user.uid).set(obj)
          .then((data) => {
            window.location = './../Forms/index.html'
            console.log(data)
          })
      })

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorMessage)
      });
  }
}

const Signupres = () => {
  let user_name = document.getElementById('nameres').value
  let email = document.getElementById('emailres').value
  let password = document.getElementById('passwordres').value
  let country = document.getElementById('countryres').value
  let city = document.getElementById('cityres').value
  let phoneno = document.getElementById('phonenores').value
  console.log(password)
  if (email == '' || user_name == '' || password == "" || phoneno == "" || country == "" || city == "") {
    alert("Enter Correct Values")
  } else {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user.uid)
        // ...

        var obj = {
          name: user_name,
          email: email,
          password: password,
          country: country,
          city: city,
          phoneno: phoneno,
          uid: user.uid
        }
        firebase.database().ref('/restaurent').child(user.uid).set(obj)
          .then((data) => {
            window.location = './../Forms/index.html'
            console.log(data)
          })
      })

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorMessage)
      });
  }
}
const Login = () =>{

  var useremail = document.getElementById('email').value
  var userpassword = document.getElementById('password').value
  
  firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
          .then((userCredential) => {
            var user = userCredential.user;
  
            // Adding current user in local Storage to utilize user info in UI
            localStorage.setItem('Current_user_ID' ,user.uid)
            localStorage.setItem('Current_user_name' ,user.uid)
  
            var currentUserId = localStorage.getItem('Current_user_ID')
  
              console.log(currentUserId)
  
              // Search ID within Resturant collection
              firebase.database().ref().child('Resturants').orderByChild('uid').equalTo(currentUserId).once('value')
              .then((snap) => {
                  var data = snap.toJSON();
  
                  if (data == null) {
                      // Search ID within Users collection
                      firebase.database().ref().child('User').orderByChild('uid').equalTo(currentUserId).once('value')
                      .then((snap) => {
                          var data = snap.toJSON();
                           // This is a User so we take it to Ordering page.
                           window.location='restaurant.html'            
                      });
                  }
                  else{
                      // This is a Resturant owner so we take it to the dashboard
                      window.location='dashboard.html' 
                  }
              });
      })
  }
//signin panel

// const Login = () => {

//   var email = document.getElementById("email").value
//   var password = document.getElementById("password").value
//   if (email === "" || password === ""  ) {
//     alert("Enter Correct Values")

//   }
//   else {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((result) => {
//         var user = result.user;
        
//         console.log(user)
//         console.log("User Email :", user.email)
//         console.log("User Uid :", user.uid)


//         localStorage.setItem('Current_user Uid', user.uid)
// console.log("Current_user Uid",user.uid)



//         // window.location = './../User/userhome.html'
//           // firebase.database().ref().child('Resturant')
//           // .orderByChild('uid')
//           // .equalTo(user.uid)
//           // .once('value')
//           // .then((snap)=>{
//           //     console.log("snap",snap.toJSON())

//           // })
      



//         //   var obj = {
//         //       Name : name,
//         //       email : email,
//         //       password :password,
//         //       type : select,
//         //       uid : user.uid
//         //   }

//         //   firebase.database().ref(`/${select}`).child(user.uid).set(obj)
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         if (errorMessage == "There is no user record corresponding to this identifier. The user may have been deleted."){
//           alert("Invalid Email or Password")
//         }
//         console.log(errorMessage)
   
//         // ..
//       });

//   }

// }

const signbtn = () => {
  window.location = './../forms/SignUp.html'
}


