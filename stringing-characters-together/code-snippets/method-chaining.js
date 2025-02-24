//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(4).toUpperCase())

//Experiment with other combinations (chains) of string methods.


// Arrays
let classes = ["science, computer, art"];
console.log(classes.length);
let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(teachers.length);

classes = ["science", "computer", "art"];
console.log(classes.length);

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let str = 'LaunchCode students rock!'
console.log(str.split(""));

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
//let selectedItems = [];

//selectedItems = groceryBag.slice(2, 5).sort();
//console.log(selectedItems);
console.log(groceryBag.slice(2, 5).sort());

// multi-dimensional array
let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);

let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];

school[0].push("dance");
school[1].push("Holmes");
console.log(school);