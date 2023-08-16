// Use function to find the factorial of a number.

// IterativeFunction
const findFactorial = n => {
    let fact = n;
    for (let i = 1; i < n; i++) {
        fact *= i;
    }
    return fact;
}

// RecursiveFunction
const factorial = n => {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(findFactorial(21));
console.log(factorial(21));