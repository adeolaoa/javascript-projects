// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronauntStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg +shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimalFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

//fuelLevel = "50%";
//astronautCount = 9;
//weatherStatus = "!clear";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    console.log("Astronauts count is not greater than 7");
}   else{
    console.log("Astronauts count Should be seven");
}
// add logic below to verify all astronauts are ready
if (astronautCount == 7 && astronauntStatus){
    console.log("Astronaunt ready");
}   else{
    console.log("Astronaunt not ready");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    console.log("Mass Kg within range");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150 ){
    console.log("Fuel Temperature Celsius within range");
}   else{
    console.log("Fuel Temperature Celsius not within range");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel == "100%"){
    console.log("Fuel level is accurate");
}   else {
    console.log("Fuel level not reached");
}
// add logic below to verify the weather status is clear
if (weatherStatus == "!clear"){
    console.log("Weather is not clear");
}   else{
    console.log("Weather is clear");
}

console.log("  ")
// Verify shuttle launch can proceed based on above conditions
console.log("All systems are a go! Initiating space shuttle launch sequence.");
console.log("------------------------------------------------------------------------")
console.log("Date: " + date);
console.log("Time:" + time);
console.log("Astonaut Count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg + "Kg");
console.log("Fuel Mass: " + fuelMassKg + "Kg");
console.log("Shuttle Mass: " + shuttleMassKg +"Kg");
console.log("Total Mass: " + totalMassKg + "Kg");
console.log("Fuel Teperature: " + fuelTempCelsius );
console.log("Weather Status: " + weatherStatus);
console.log("-----------------------------------------------------------------------");

if (date && time && astronautCount <= 7 && crewMassKg && fuelMassKg && shuttleMassKg && totalMassKg
    && fuelMassKg && fuelTempCelsius && weatherStatus == "clear"){
    console.log("Have a safe flight astronauts!");
}   else{
    console.log("shut down the launch operations");
}