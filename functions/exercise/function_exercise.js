
//Rectangles
// Write a function makeLine(size) that returns a line with exactly size hashes.
// make an empty string
// for statement that starts at zero and runs less than length of the function parameter.
// then increment with the character one has in mind for the empty string specified

const { sign } = require("crypto");

function makeLine(size, line = "."){
    let lin = ""
    for (let i = 0; i < size; i++){
        lin += line;
        //console.log(line);
    }
    return lin;
}
console.log(makeLine(5));

// makeSquare(size)
// Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square. Instead, 
// it must return a single string that contains the entire shape.
function makeSquare(size){
    let square = "";
    for (let i = 0; i < size; i++){
        square += makeLine(size) +'\n';
    }
   return square.slice(0, -1);
}
console.log(makeSquare(5, '*'));

// makeRectangle(width, height)
// Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. 
// Use your makeLine function to do this.

// specify two parameters inside the function

function makeRectangle(width,height){
    let rectangle = "";
    for (let i = 0; i < height; i++){
        rectangle += makeLine(width) + '\n'; 
    }
    //return rectangle;
    return rectangle.slice(0, -1); // to remove the empty line at the last line
}
//console.log(makeRectangle(3,3));

// Triangles
// makeDownwardStairs(height)
// Write a function makeDownwardStairs(height) that prints the staircase pattern shown below,
// with the given height. Use your makeLine function to do this.

function makeDownwardStairs(height){
    let downward = '';
    for (let i = 0; i < height; i++){
        downward += makeLine(i+1) +'\n'; 
    }
    return downward.slice(0,-1);
}
//console.log(makeDownwardStairs(5));

// makeSpaceLine(numSpaces, numChars)
// Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the 
// specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces
function makeSpaceLine(numSpaces, numChars){
    let spaces = '';
    let newLine = ''
    for (let i = 0; i <= numSpaces; i++){
        spaces += ' '
    newLine =  spaces + makeLine(numChars) + spaces ;
    }
    return newLine.slice(0,-1);
}
//console.log(makeSpaceLine(0,9));

// makeIsoscelesTriangle(height)
// makeIsoscelesTriangle(height)
// Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
function makeIsoscelesTriangle(height){
    let isosceles = '';
    for (let i = 0; i < height; i++){
        isosceles += (makeSpaceLine(height - i -1, 2 * i + 1) + '\n');
    }
    return isosceles.slice(0,-1);
}
console.log(makeIsoscelesTriangle(5));

// makeDiamond(height) 
// Write a function makeDiamond(height) that returns a diamond where the triangle 
//formed by the top portion has the given height.

function makeDiamond(height){
    let diamond = "";
    let flipDiamond = '';
    for (let i = 0; i < height; i++){
        diamond = makeIsoscelesTriangle(height);
        // split the triangle created using a delimeter \n, reverse and join using \n
        flipDiamond = diamond.split('\n').reverse().join('\n');
        diamond = diamond + '\n' + flipDiamond;
    }
    return diamond
}
console.log(makeDiamond(5));