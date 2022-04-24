// Assignment Code
var generatedPassword = document.querySelector("#password");
var resetPassword = document.querySelector("#reset");
var generateBtn = document.querySelector("#generate");
var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
var uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numValues = "1234567890"; 
var specialChar = ",.?!@#$%&"
var userLength;
var newPassword = "";
var workingPassword = "";
var randomChar = Math.floor(Math.random() * workingPassword.length);

console.log('passwordlength:', userLength);


console.log(newPassword);
console.log(randomChar);

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

function resetGenerator (){
    if (generatedPassword.value === newPassword){
        generatedPassword.value = " ";
        newPassword = " ";
    } 
}

resetPassword.addEventListener("click", resetGenerator);

function generatePassword(){
// here I am reseting the password generator. 
        resetGenerator();
 
// How many characters? 
    userLength = prompt("How many Characters? 8 - 128"); 
    if (userLength < 8 || userLength > 128) {
        alert('Please choose a valid Length: 8 - 128');
        console.log('Please choose a valid number: 8 - 128');
        return; // this will stop the app from running if they didnt choose a number within the range. 
    }
    // LOWER CASE
    var isLowerCase = confirm("Do you want lower Case? Y or N"); 
    if(isLowerCase) {
        workingPassword = lowerCaseValues
        console.log('working password', workingPassword);
        
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
    console.log("SpecialChar:", isSpecialChar);
// NUMBERS    
    var isNumbers = confirm("Do you want numbers");
    if (isNumbers) {
        workingPassword += numValues;
        console.log('working  password', workingPassword);
    }
    console.log("Numbers", isNumbers);
}

// -- Wanted to add emojis too, but only some were displaying. 
    // var isEmojis = confirm("Do you want Emojis? \n 😄😺🙋‍♀️👩‍💻🖱️⌨️");
    // if (isEmojis) {
    //     workingPassword += emojiValues;
    //     console.log('working  password', workingPassword);
    // }
    // console.log("Numbers", isNumbers);


   

// generateBtn.addEventListener("click", writePassword);

// function  writePassword(){
//     generatePassword();
//     for (let i = 0; i < userLength; i++) {
//         var randomCharNum = Math.floor(Math.random() * workingPassword.length);
//         newPassword += workingPassword.charAt(randomCharNum);
//         console.log('New Password:', newPassword);
//         generatedPassword.value = newPassword;

// }
// }
// here I am reseting the password generator. 
