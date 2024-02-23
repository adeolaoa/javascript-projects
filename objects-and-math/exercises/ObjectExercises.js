let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let Beagle = {
   name: "Amanda",
   species: "Big Beagle",
   mass: 12,
   age: 15
};

let tardi = {
   name: "Almina",
   species: "Tardigrade",
   mass: 11,
   age: 7
}

let parrot = {
   name: "Troy",
   species: "Psittaciformes",
   mass: 4.5,
   age: 4
}
// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = Math.ceil(Math.random()*10);
salamander["astronautID"] = Math.ceil(Math.random()*10);
Beagle["astronautID"] = Math.ceil(Math.random()*10);
tardi["astronautID"] = Math.ceil(Math.random()*10);
parrot["astronautID"] = Math.ceil(Math.random()*10);

// Add a move method to each animal object. The move method will select a 
// random number of steps from 0 to 10 for the animal to take. The number can be 0 
// as well as 10.
superChimpOne["move"] = function () {return Math.floor(Math.random()*11)}
salamander["move"] = function () {return Math.floor(Math.random()*11)}
Beagle["move"] = function () {return Math.floor(Math.random()*11)}
tardi["move"] = function () {return Math.floor(Math.random()*11)}
parrot["move"] = function () {return Math.floor(Math.random()*11)}

/*
console.log(superChimpOne);
console.log(salamander);
console.log(Beagle);
console.log(tardi);
console.log(parrot);
*/

// multiplied by 11, so that the random number generated can include 10
// Create an array to hold the animal objects.
let animalArray = [superChimpOne, salamander,Beagle, tardi, parrot];

// Print out the relevant information about each animal.
/*
console.log(animalArray[0]);
console.log(animalArray[1]);
console.log(animalArray[2]);
console.log(animalArray[3]);
*/

//for (item in animalArray){
  // console.log (animalArray[item]);
//}

// Start an animal race!

// Part 2: Crew Reports
// Define a crewReports function to accomplish this. When passed one of the animal 
//objects, the function returns a template literal with the following string:
//  '____ is a ____. They are ____ years old and ____ kilograms. Their ID is ____.'

// Fill in the blanks with the name, species, age, mass, and ID for the selected 
//animal.

// `${arr[item].name}is a ${arr[item].species}. They are ${arr[item].age}years old and ${arr[item].mass} kilograms. Their ID is ${arr[item].astronautID}.`

function crewReports(obj){
   return `${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`
}
console.log(crewReports(animalArray[0]));

// Part 3: Crew Fitness
// Define a fitnessTest function that takes an array as a parameter.

// Within the function, race the five animals together by using the move method. 
// An animal is done with the race when they reach 20 steps or greater. Store the result 
// as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s 
// name and race result. Create a new array to store how many turns it takes each animal to complete the race.

// Return the array from the function, then print the results to the console (one animal per line).

// HINT: There are a lot of different ways to approach this problem. One way that 
// works well is to see how many iterations of the move method it will take for each 
// animal to reach 20 steps.

function fitnessTest(arr){
   let results = [], numSteps, turns;
   for (let i = 0; i < arr.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += arr[i].move();
       turns++;
       }
       results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(animalArray));