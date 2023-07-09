'use strict';

// REST & SPREAD

// REST - ...
// ..., ..., ..., ..., -> []

const arrowSumReduce = (...restArray) => restArray.reduce((accumulator, current) => accumulator + current, 0);

// SPREAD
// [] -> ..., ..., ..., ...,

const numbers = [10, 2, 3, 4, 5];

console.log(arrowSumReduce(numbers));
console.log(arrowSumReduce(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]));
console.log(arrowSumReduce(...numbers));
console.log(Math.min(...numbers));