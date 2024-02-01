/* remember if its a array then use (for loop) */


const numbers = [4, 5, 6, 7];
const doubled = [];

//use (for loop)
for (const num of numbers){
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);

// Example (callBack function):
const count = [7, 8, 9, 55, 4, 12];

function doubled (num){
    console.log('No Now:', num);
    return num * 2;
}

// shortcut function use of (=>)
const doubled2 = num2 => num2 * 2;

//map calculations:
const result = count.map(doubled2);
console.log(result);

//map works in loops through each element of the array and do the operation that you passed in the call back function and
// hold the result from each operation in an array and finally returns you the array.


