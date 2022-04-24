# hw-week3-AKW

# Disclaimer:

# I started building this code inside of the course file itself, and it wasnt until later that I reaslised I would need it in its own repo.

## I set out to create a Random Password generator.

## Challenges.

- I ran into issues when try to figure out how to reset the generator. I solved the problem by calling this if statement at the begining of my generate password function. I am not sure if this is best practice, but it worked!

```js
// here I am reseting the password generator.
function resetGenerator() {
  if (generatedPassword.value === newPassword) {
    generatedPassword.value = " ";
    newPassword = " ";
  }
}
```

- I approached the "randomness" of the password by making a very long sting that included all possible characters.

```js
function writePassword() {
  generatePassword();
  for (let i = 0; i < userLength; i++) {
    var randomCharNum = Math.floor(Math.random() * workingPassword.length);
    newPassword += workingPassword.charAt(randomCharNum);
    console.log("New Password:", newPassword);
    generatedPassword.value = newPassword;
  }
}
```

## NEW BUTTON!

-- I decided to add a new button to specifically reset the generator as well!

## Finished Application!

![ Gif of app working](/passwordGeneratorGifs.gif)
