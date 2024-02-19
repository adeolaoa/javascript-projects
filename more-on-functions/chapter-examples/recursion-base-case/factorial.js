//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
  if (typeof integer === "string" || typeof integer === "-number" || typeof integer === "float"){
    return "error message"
  } else if (integer === 1){
    return integer;
  } else {
    console.log(integer);
    return integer*(factorial(integer-1));
    console.log(integer);
  }
}

console.log(factorial('0.5'));

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.
/*
function factorial(integer){
  if (integer === 1){
    return integer;
  } else {
    console.log(integer);
    return integer*(factorial(integer-1));
    console.log(integer);
  }
}
*/