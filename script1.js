// elements to grab from the DOM //
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var specialEl = document.getElementById("special");
var generateEl = document.getElementById("generate");
var password = document.getElementById("password"); 
var passwordLength;

// my variable list of charset to from //
var uppercaseChar =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numbersChar = "0123456789";
var specialChar = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~";

// listens to click on my submit ID to return password with variables checked //

submit.addEventListener("click", function generatePassword(e){
        let userPassword = "";
        let passwordChar = "";

     if (lengthEl.value >= 8 && lengthEl.value <= 128 ) {
        passwordLength = Number(lengthEl.value);
    }
    else {
        alert("Please choose between 8 and 128 characters.");
    }

    if (uppercaseEl.checked) {
        passwordChar += uppercaseChar;
    }
    if (lowercaseEl.checked) {
        passwordChar += lowercaseChar;
    }
    if (numbersEl.checked) {
        passwordChar += numbersChar;
    }
    if (specialEl.checked) {
        passwordChar += specialChar; 
    }
 
    for (let i = 0; i < passwordLength; i++) {
            userPassword += passwordChar.charAt(
            Math.floor(Math.random() * passwordChar.length)
            );
    }

    if (userPassword == "") {
        alert("Please check off an option.");
    }
    else {
        password.value = userPassword;
    }
}, false);
