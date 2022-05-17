const firebaseConfig = {
    apiKey: "AIzaSyCm0gwerAYiN_R-byM2ZmPYC344i3fSBy4",
    authDomain: "sito-matrimonio-ema-e-cla.firebaseapp.com",
    databaseURL: "https://sito-matrimonio-ema-e-cla-default-rtdb.firebaseio.com",
    projectId: "sito-matrimonio-ema-e-cla",
    storageBucket: "sito-matrimonio-ema-e-cla.appspot.com",
    messagingSenderId: "578677149631",
    appId: "1:578677149631:web:75efb908d7ddc085641b0a",
    measurementId: "G-Q9GMYQG60G"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference database 
var foodFormDB = firebase.database().ref('foodForm');

document.getElementById('foodForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var msgContent1 = getElementVal('msgContent1');
    var msgContent2 = getElementVal('msgContent2');
    var msgContent3 = getElementVal('msgContent3');

    saveMessages(msgContent1, msgContent2, msgContent3);

// enable allert
document.querySelector('.alert').style.display = "block";

// remove the alert
setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
}, 3000);


// reset the form

document.getElementById("foodForm").reset();

}


const saveMessages = (msgContent1, msgContent2, msgContent3) => {
    var newfoodForm = foodFormDB.push();

    newfoodForm.set({
        msgContent1 : msgContent1,
        msgContent2 : msgContent2,
        msgContent3 : msgContent3,
    }
    )
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};







