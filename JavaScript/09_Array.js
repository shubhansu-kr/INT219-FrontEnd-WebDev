// Arrays in JS 

const arr = [];
const arr1 = [21, 13, 15];
const arr2 = new Array(5); // array of size 5;

const arr3 = new Array("Hey", "hey", "HEY", "hEY");

for (let index = 0; index < arr3.length; index++) {
    const element = arr3[index];
    
    console.log(element);
}

arr3.forEach(x => {
    console.log(x);
});

for (const itr of arr3) {
    console.log(itr);
}

// Mapping to create a new array.
const arr4 = arr3.map((x)=>{return (x + " Apple");});
console.log(arr4);

const arr5 = arr3.map((x)=>(x + " lol"));
console.log(arr5);


const arr6 = arr1.toString();
// arr6 is not an array.
console.log(typeof(arr6), arr6);

// join() : Concatinates all the element in a string and returns it.
console.log(arr5.join());

console.log(arr5.shift()); // removes the first element
console.log(arr5.unshift(231)); // add the element at front.

console.log(arr5);
// delete(arr1);
console.log(arr1);

const splicedElements = arr5.splice(2, 3, "newly", "inserted", "elements");
console.log(splicedElements, arr5);

const a = arr5.slice(1, 3);
console.log(typeof(a), " : ", a);

arr5.sort();
console.log(arr5);

arr5.reverse();
console.log(arr5);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums);
// splice 
const returnedArray= nums.splice(2, 3, "Akshita");
console.log(nums);
console.log(returnedArray);

const ele = nums.slice(2, 3);
console.log(typeof(ele), ele);

nums.splice(2, 1);

console.log(nums);