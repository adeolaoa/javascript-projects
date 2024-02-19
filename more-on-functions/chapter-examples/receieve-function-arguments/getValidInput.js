const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}
/*
// A boolean function for validating input
let isEven = function(n) {
  return Number(n) % 2 === 0;
};
console.log(getValidInput('Enter an even number:', isEven));

// TODO 1: write a validator 
// that ensures input starts with "a"

let strA = function (str){
  return str.slice(0,1) === "a"
}
console.log(getValidInput('Enter a word that starts with "a": ', strA));
*/
// TODO 2: write a validator 
// that ensures input is a vowel
let strB = function (str){
  //let vowel = ['a','e','i','o','u'] ;
  //for (let i = 0; i < vowel.length; i++){
  //  console.log(vowel[i]);
  if (str.slice(0,1) === 'a' ||str.slice(0,1) === 'e' ||str.slice(0,1) ==='i' ||
  str.slice(0,1) === 'o' || str.slice(0,1) ==='u'){
    return str;
  }
    //return str;
    //console.log(i);
  //}
};
console.log(getValidInput("Enter a word that starts with a vowel: ", strB));
// Be sure to test your code!

// Password checker/validation
/*
let isValidPassword = function(password) {

    // Passwords should have at least 8 characters
    if (password.length < 8) {
    return false;
    }

    return true;
};

console.log(getValidInput('Create a password:', isValidPassword));
*/