const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modified = str.slice(3).concat(str.slice(0,3));
console.log(modified);
console.log(modified.length);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is ${str}, while the modified string is ${modified}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let req = input.question("Please enter number of letters to be relocated: ");
console.log(req.length);
//let conRequest = modified.concat(req);
//console.log(`The word that relocates the new letters is ${conRequest}.`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let conRequest = modified.concat(req);
if (req.length <= modified.length){
    console.log(`The word that relocates the new letters is ${conRequest}.`);
}   else{
    console.log(modified);
}