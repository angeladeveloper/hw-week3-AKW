// Assignment Code
var generatedPassword = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
var uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numValues = "1234567890"; 
var specialChar = ",.?!@#$%&"
var userLength;
var newPassword = "";
var workingPassword = "";
var randomChar = Math.floor(Math.random() * workingPassword.length);

// function howLong(){
//     userLength = prompt("How many Characters? 8 - 128"); 
//     if (userLength < 8 || userLength > 128) {
//         alert('Please choose a valid number: 8 - 128');
//         console.log('Please choose a valid number: 8 - 128');
//         return;
//     }else {
//         generatePassword();
//     }
// }


console.log('passwordlength:', userLength);



console.log(randomChar);

function generatePassword(){
// here I am reseting the password generator. 
    if (generatedPassword.value === newPassword){
        generatedPassword.value = " ";
        newPassword = " ";
    }

// How many characters? 
    userLength = prompt("How many Characters? 8 - 128"); 
    if (userLength < 8 || userLength > 128) {
        alert('Please choose a valid number: 8 - 128');
        console.log('Please choose a valid number: 8 - 128');
    }
    // LOWER CASE
    var isLowerCase = confirm("Do you want lower Case? Y or N"); 
    if(isLowerCase) {
        workingPassword = lowerCaseValues
        console.log('working  password', workingPassword);
        
    }
    console.log("LowerCase:", isLowerCase);
// UPPERCASE
    var isUpperCase = confirm("Do you want uppercase? Y or N");
    if (isUpperCase) {
        workingPassword += uppercaseValues;
        console.log('working  password', workingPassword);
    }
    console.log("UpperCase:", isUpperCase);
    
// SPECIAL CHAR
    var isSpecialChar = confirm("Do you want Special Chars?");
    if (isSpecialChar) {
        workingPassword += specialChar;
        console.log('working  password', workingPassword);
    }
    console.log("UpperCase:", isSpecialChar);
// NUMBERS    
    var isNumbers = confirm("Do you want numbers");
    if (isNumbers) {
        workingPassword += numValues;
        console.log('working  password', workingPassword);
    }
    console.log("UpperCase:", isNumbers);
}
   

generateBtn.addEventListener("click", writePassword);

function  writePassword(){
    generatePassword();
    for (let i = 0; i < userLength; i++) {
        var randomCharNum = Math.floor(Math.random() * workingPassword.length);
        newPassword += workingPassword.charAt(randomCharNum);
        console.log('New Password:', newPassword);
        generatedPassword.value = newPassword;

}
}

