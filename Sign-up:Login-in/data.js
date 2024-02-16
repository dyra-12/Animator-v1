

var firebaseConfig = {
    apiKey: "AIzaSyAdgofJABOD1E519QEBnYXi6S-zndJTQI8",
    authDomain: "signuppage-9f4bb.firebaseapp.com",
    projectId: "signuppage-9f4bb",
    storageBucket: "signuppage-9f4bb.appspot.com",
    messagingSenderId: "378236352270",
    appId: "1:378236352270:web:05bb10d903d1c987f4c95f",
    measurementId: "G-7ZVZL0EL9F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// let's code 
var count = 0;
var datab  = firebase.database().ref('user')
var database = firebase.database()
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;

firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));

    database.ref('user/').once("value").then(function(snapshot) {
        var list = snapshot.val();
        //console.log(list.count);
        var count = list.count;
    });

    database.ref('users/').once("value").then(function(snapshot) {
        var users = snapshot.val();
        //console.log(email);

        for (const userKey in users) {
            const userEmail = users[userKey].email;
            if(userEmail==email){
                
                let t1=userEmail;
                console.log(t1)
                var t2 = users[userKey].name;
                console.log(t2)
                var t3 = users[userKey].username;
                console.log(t3)

                
                localStorage.setItem("name", t2);
                localStorage.setItem("uname", t3);
                

            }
            
          }
        
    });
    //window.open("../Home\ Page/Animator_home.html","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    var email = document.getElementById('eemail').value;
    var name = "name";

    database.ref('user/').once("value").then(function(snapshot) {
        var list = snapshot.val();
        //console.log(list.count);
        var count = list.count;
    });


    e.preventDefault();
    var userInfo = database.ref('users/'+"user"+count).push();
    
    database.ref('users/'+"user"+count).set({
        username:getId('uname'),
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });

    var ctn = count++;

    var info=database.ref('user/').push();

    database.ref('user/').set({
        count : ctn
    });

    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}



