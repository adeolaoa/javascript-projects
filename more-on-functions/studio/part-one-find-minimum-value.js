//1) Create a function with an array of numbers as its parameter. The function 
//should iterate through the array and return the minimum value from the array. 
//Hint: Use what you know about if statements to identify and store the smalles
//value within the array.

// Part 1: Find the Minimum Value
function findMin(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
//Sample arrays for testing:
let nums1A = [5, 10, 2, 42];
let nums1B = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums1C = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findMin(nums1A));
console.log(findMin(nums1B));
console.log(findMin(nums1C));

// 2) Create another function with an array of numbers as its parameter. Within this function:
//Part 2: Create a New Sorted Array
function sortNum(arr){
    let sortedArray = []
    while (arr.length > 0){
        let min = findMin(arr);
        // push into new array
        sortedArray.push(min);
        // remove from old array
        arr.splice(arr.indexOf(min), 1);
    }
    return sortedArray
}
//Sample arrays for testing:
let nums2A = [5, 10, 2, 42];
let nums2B = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums2C = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(sortNum(nums2A));
console.log(sortNum(nums2B));
console.log(sortNum(nums2C));

// 3) Part 3: Number Sorting the Easy Way
// Use an anonymous function to determines which element is larger and swaps the 
// positions if necessary. 

//Sample arrays for testing:
let nums3A = [5, 10, 2, 42];
let nums3B = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3C = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Sort each sample array in increasing / ascending order.
// arrayName.sort(function(a, b){return a-b});
nums3A.sort(function(a,b){return a-b});
nums3B.sort(function(a,b){return a-b});
nums3C.sort(function(a,b){return a-b});

//Using one of the test arrays as the argument, call your function inside the console.log statement below.
console.log(nums3A);
console.log(nums3B);
console.log(nums3C);

// Sort each sample array in decreasing / decending order.
nums3A.sort(function(a,b){return b-a});
nums3B.sort(function(a,b){return b-a});
nums3C.sort(function(a,b){return b-a});

//Using one of the test arrays as the argument, call your function inside the console.log statement below.
console.log(nums3A);
console.log(nums3B);
console.log(nums3C);

// Checking if the function alter arrayName
// No

// Use recursion to write a sorting function
function sortNumRec(arr, sorted = []){
    // Base case, return the final array
    if (arr.length === 0){
        return sorted
    }
    let min = findMin(arr);
    sorted.push(min);
    arr.splice(arr.indexOf(min), 1);
    // call function with updated array
    return sortNumRec(arr, sorted);
}   

//Sample arrays for testing:
let nums4A = [5, 10, 2, 42];
let nums4B = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums4C = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(sortNumRec(nums4A));
console.log(sortNumRec(nums4B));
console.log(sortNumRec(nums4C));
