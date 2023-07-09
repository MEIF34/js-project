'use strict';

// REST & SPREAD

// REST - ...
// ..., ..., ..., ..., -> []

// Задача: знайти суму двох елементів, а всі "зайві " аргументи покласти до массиву
function sum (a, b, ...arrayOfRestArguments) {
    console.log(arrayOfRestArguments);
    return a + b;
}

sum (3, 4); // 7
console.log(sum (1, 2, 3, 4, 5, 6)); // 3

/*

const arrowSum = (...rest) => {
    let sum = 0;

    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }

    return sum;
} 

*/

const arrowSumReduce = (...restArray) => restArray.reduce((accumulator, current) => accumulator + current, 0);
