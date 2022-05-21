const firebaseConfig = {
    apiKey: "AIzaSyBuz_SNdleiKtc9LSS6usz_rBNfq9SQ7T0",
    authDomain: "conferma-2d2b2.firebaseapp.com",
    databaseURL: "https://conferma-2d2b2-default-rtdb.firebaseio.com",
    projectId: "conferma-2d2b2",
    storageBucket: "conferma-2d2b2.appspot.com",
    messagingSenderId: "661665487196",
    appId: "1:661665487196:web:81aab9d652367122530999"
  };

  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference database 
var confirmFormDB = firebase.database().ref('confirmForm');

document.getElementById('confirmForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var msgContent4 = getElementVal('msgContent4');
    var msgContent5 = getElementVal('msgContent5');
    var msgContent6 = getElementVal('msgContent6');
    var presenza = document.querySelector("input[name='presenza']:checked").value;

    saveMessages(msgContent4, msgContent6, presenza);

// enable allert
document.querySelector('.alert').style.display = "block";

// remove the alert
setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
}, 3000);


// reset the form

document.getElementById("confirmForm").reset();

}


const saveMessages = (msgContent4, msgContent5, msgContent6) => {
    var newconfirmForm = confirmFormDB.push();

    newconfirmForm.set({
        msgContent4 : msgContent4,
        msgContent5 : msgContent5,
        msgContent6 : msgContent6,
    }
    )
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};







