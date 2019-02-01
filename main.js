//alert("hey")


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCnWu6j8AYJjcQYnw5lS7apam0tBxiSiGo",
  authDomain: "attendance-sheet-2903.firebaseapp.com",
  databaseURL: "https://attendance-sheet-2903.firebaseio.com",
  projectId: "attendance-sheet-2903",
  storageBucket: "attendance-sheet-2903.appspot.com",
  messagingSenderId: "420503289113"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('AttendanceData');

// Listen for form submit
document.getElementById('AttendanceSheet').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var regNo = getInputVal('regNo');
  //var email = getInputVal('email');
  //var phone = getInputVal('phone');
  //var message = getInputVal('message');

  // Save message
  saveMessage(name, regNo);    // all the initialized javascript variables

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('AttendanceSheet').reset();
}

// Function to get form values
function getInputVal(id){
  
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, regNo)   //arguments as the initialised JvaScript variables
{
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    regNo:regNo,
    //email:email,
    //phone:phone,
    //message:message
  });
}