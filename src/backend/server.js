var firebase = require("@firebase/app");
require('firebase/auth');
require('dotenv').config()


let express = require('express')
let app = express()

const port = process.env.PORT || 5000





  
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebase.default.auth().signInWithEmailAndPassword("email@yahoo.com", "password")
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });


app.listen(port, () =>{
    console.log(`The server is running on port ${port}`)
})

module.exports