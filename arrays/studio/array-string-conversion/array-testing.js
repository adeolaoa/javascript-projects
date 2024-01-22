let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

// using include() methid to check if ",", or ";" or " " exists in the string
console.log(protoArray1.includes(","));
console.log(protoArray2.includes(";"));
console.log(protoArray3.includes(" "));
console.log(protoArray4.includes(","));

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	
	let revComma1 = protoArray1.split(",").reverse().join();
	console.log(revComma1);

	let check;
	let output;
	//TODO: 2. write the code required for this step

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let revComma2 = protoArray2.split(";").sort().join();
	console.log(revComma2);
	let check;
	let output;
//TODO: write the code required for this step

  
	return output;
}

//4)
function reverseSpaces() {
	let revComma3 = protoArray3.split(" ").sort().reverse().join();
	console.log(revComma3);
	let check;
	let output;
  //TODO: write the code required for this step

	return output;
}

//5)
function commaSpace() {
	let revComma4 = protoArray4.split(",").reverse().join().trim();
	console.log(revComma4);
	let check;
	let output;
	//TODO: write the code required for this step
  
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
