function sayHello() {
   console.log("Hello, World!");
}

function sayHello() {
   console.log("Hello, World!");
}

sayHello();

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
   console.log(a);
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

function removeHyphens(str) {
   let strWithoutHyphens = ''

   for (let i = 0; i < str.length; i++) {
   if (str[i] !== '-') {
       strWithoutHyphens += str[i];
       //console.log(strWithoutHyphens);
   }
   }

   return strWithoutHyphens;
}

let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone));
//console.log(strWithoutHyphens);


let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();


let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));