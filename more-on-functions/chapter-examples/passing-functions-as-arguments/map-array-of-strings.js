let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let str = function(str){
    return str.slice(0,1);
}
let firstInitials = names.map(str);

console.log(firstInitials);
