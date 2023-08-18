// Destructuring : Breaking the array into single elements 

const nums = [1, 2, 3, 4, 5];

let [num1, num2, , num3] = nums;
console.log(nums); // 1, 2, 3, 4, 5
console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 4

const arr = new Array("this", "is", "an", "array");
const nums1 = [];
nums1[0] = 21;
nums1[4] = 21;

console.log(nums1); // [ 21, <3 empty items>, 21 ]

console.log(typeof(arr));

