// Spread and Rest Operator. 

// Spread operator is used to spread the array elements 
const array = [1, 2, 3, 4, 5];

// Adds element 6 and 7 to the array and returns a new array.
const newArray = [...array, 6, 7];
console.log(newArray); 

const summ = (a, b, c) => {
    return a+b+c;
}

// Takes only 3 elements from the array and spreads it over args.
console.log(summ(...newArray));

// Rest: Used to destructure arguments into an array
const add = (...args) => {
    let sum = 0;
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        sum += element;
    }
    return sum;
}

console.log(add(2, 3, 4, 5));
console.log(add(2, 3, 4, 5, 2, 4, 5));

