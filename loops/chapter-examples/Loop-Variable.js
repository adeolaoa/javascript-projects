// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

for (let i = 0; i < 51; i++) {
   console.log(i);
 }

 for (let i = -1; i < -51; i--) {
  console.log(i);
}

for (let i = 0; i < 51; i = i+2) {
  console.log(i);
}

let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

//accumulator
let n = 6;
let total = 0;

for (let i = 1; i <= n; i++) {
  console.log(total) 
  total += i;
}

console.log(total);