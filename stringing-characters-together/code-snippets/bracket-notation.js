let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = "JavaScript rocks!";
console.log(phrase.length);
console.log(phrase[phrase.length - 8]);


let nonprofit = "LaunchCode";

console.log(nonprofit.toLowerCase());
console.log(nonprofit);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;

console.log(location.length);

let pet = 'cat';
console.log(pet + 's');
pet += 's';
console.log(pet);

let word = 'JavaScript';
console.log(word.toUpperCase());

console.log(word.slice(4).toUpperCase());

let language = "JavaScript";
language.replace('J', 'Q');
console.log(language)
console.log(language.slice(0,5));
console.log(language);

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);