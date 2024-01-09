const input = require('readline-sync');

// let info = input.question("Question text... ");

let name = input.question("Enter your name: ");

console.log("Hello, " + name + "!");

// Update your code to request a user’s first and last name, then print an output that looks like:
// const input = require('readline-sync');

let first_name = input.question("Enter your first name: ");
console.log("First name: " + first_name);

let last_name = input.question("Enter last name: ");
console.log("Last name: " + last_name);

console.log("Last, " + "First: " + first_name +',' +  last_name);

/*
First name: Elite
Last name: Coder
Last, First: Coder, Elite
*/