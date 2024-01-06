// Declare and assign the variables below
let space_shuttle = "Determination";
let shuttle_speed = 17500;
let dist2Mars = 22500000;
let dist2Moon = 384400;
let milesKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof space_shuttle);
console.log(typeof shuttle_speed);
console.log(typeof dist2Mars);
console.log(typeof dist2Moon);
console.log(typeof milesKm);

// Calculate a space mission below

    // creating a variable to calculate miles to mars
let miles2Mars = dist2Mars * milesKm;
let hours2Mars = miles2Mars/shuttle_speed;
let days2Mars = hours2Mars/24;

// Print the results of the space mission calculations below
console.log(space_shuttle +  " will take "  + days2Mars + " days to reach Mars.")

// Calculate a trip to the moon below
let miles2Moon = dist2Moon * milesKm;
let hours2Moon = miles2Moon/shuttle_speed;
let days2Moon = hours2Moon/24;

// Print the results of the trip to the moon below
console.log(space_shuttle +  " will take "  + days2Moon + " days to reach Moon.")