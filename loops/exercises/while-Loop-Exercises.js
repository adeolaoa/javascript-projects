//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startFuelLevel = 0, numberOfAstronauts = 0, altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require("readline-sync");

while (startFuelLevel < 5000 || startFuelLevel > 30000){
  startFuelLevel = Number(input.question("Please enter a positive starting fuel level? "));
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (numberOfAstronauts < 1 || numberOfAstronauts > 7){
  numberOfAstronauts = Number(input.question("Enter the numebr of astronauts (up to a maximum of 7): "));
}
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let fuelStatus = 1000
while(startFuelLevel > fuelStatus){
  altitude += 50;
  startFuelLevel = startFuelLevel -(100 * numberOfAstronauts);
  console.log(`The new fuel level is ${startFuelLevel} and the altitude level is ${altitude} Km`);
}

// /*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

// If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log("The shuttle gained an altitude of " + altitude + "km.");
if (altitude >= 2000){
  console.log("Orbit achieved!");
}else{
    console.log("Failed to reach orbit.");
  }

