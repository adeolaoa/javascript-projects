

function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}
//let str = "tacocat";
console.log(reverse("tacocat"));