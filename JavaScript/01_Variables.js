// Variables in JavaScript

// There are four ways to declare a varibale : 

// 1. Using 'var' keyword (Used for older browser)
var myName;
console.log(myName);  // prints undefined.

myName = "Shubh";

// If we decalre a variable using var keyword then the previous value is kept stored
console.log(myName);  // prints shubh

var myName;
console.log(myName); // Still prints shubh

// 2. Using 'Const' keyword (Used for declaring constant variables)
const dob = "21072003";

// 3. Using 'Let' keyword (Introduced in ES6 2015)
let age = 20;

// 4. Without using any keyword.
sem = 5;

sem = 5 + 3 + '4';
console.log(sem); // 84 
// Js starts executing from left to right. Whenver a char or string is encountered
// in expression with addition operator, it concatinates the number with string/char.

sem = '5' + 3 + 4;
console.log(sem); //  534

// Hoisting: We can initialize the variable first and then we can declare
// the varable later if we use var.

// eg. 
ab = 10;
var ab;

console.log(ab); // prints 10 
// does not print undefined due to hoisting.

// however we cannot do a let initialisation after declaring a variables.
ac = 21;
// let ac = 21;  error.