/*
function callMe(func) {
    func();
}

callMe("Al");



let fileLogger = function(msg) {

    // Put the message in a file
}

function logError(msg, logger) {
    let errorMsg = 'ERROR: ' + msg;
    logger(errorMsg);
}

logError('Something broke!', fileLogger);
*/
// recursion

function removeI(arr) {
    if (arr.indexOf('i') === -1){
    //return final array
    //end recursion
    } else {
    //remove one 'i' entry from array
    //call removeI function again
    }
};

let arr = ['One', 'i', 'c', 'X', 'i', 'i', 54]
console.log(removeI(arr))