let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//Use splice to make the following changes to the cargoHold array. Be sure to print the array after each step to confirm your updates.

//1) Insert the string 'keys' at index 3 without replacing any other entries.

//cargoHold = [...cargoHold.slice(0,3), "keys", ...cargoHold.slice(3)]; //slice method

cargoHold.splice(3,0,"keys") // splice method
console.log(cargoHold);
//2) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).
//cargoHold = [cargoHold.slice(0,4) .concat(cargoHold.slice(5,8))];
cargoHold = [...cargoHold.slice(0,4), ...cargoHold.slice(5,8)];

//cargoHold.pop(cargoHold.indexOf("instruction manual"));
console.log(cargoHold);
//3) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.
cargoHold.splice(2,3,'cat', 'fob', 'string cheese');// the middle 3, deletes the previous value in the array
console.log(cargoHold);