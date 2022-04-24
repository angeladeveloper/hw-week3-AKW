# hw-week3-AKW

# Disclaimer:

# I started building this code inside of the course file itself, and it wasnt until later that I reaslised I would need it in its own repo.

## I set out to create a Random Password generator.

## Challenges.

- I ran into issues when try to figure out how to reset the generator. I solved the problem by calling this if statement at the begining of my generate password function. I am not sure if this is best practice, but it worked!

```js
if (generatedPassword.value === newPassword) {
  generatedPassword.value = " ";
  newPassword = " ";
}
```
