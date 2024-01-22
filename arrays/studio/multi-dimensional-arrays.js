let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.toUpperCase().split(",")
console.log(food);

equipment = equipment.toUpperCase().split(",")
console.log(equipment);

pets = pets.toUpperCase().split(",")
console.log(pets);

sleepAids= sleepAids.toUpperCase().split(",")
console.log(sleepAids);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold)
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let user = Number(input.question("Please select a cabinet between (0 - 3) in the cargoHold: "));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (user <= 3){
    console.log(`The content of the selected cabinent is ${cargoHold[user]}`);
}   else{
    console.log(`The number ${user} entered by the user is invalid.`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
user = Number(input.question("Please select a cabinet between (0 - 3) in the cargoHold: "));
word = input.question("Please enter a word to check if it exist in the cargoHold: ");
if (user <= 3 && cargoHold[user].includes(word)){
    console.log(`Cabinet ${user} DOES contain ${word}.`);
}   else if(user > 3 || cargoHold[user].includes(word)){
    console.log(`The number ${user} entered by the user is invalid and DOES not contain ${word}.`);
}   else{
    console.log(`Cabinet ${user} DOES NOT contain ${word}.`)
}