/*

Задача:

Вивести на консоль таблицю множення від 1 до 5, у вигляді:

1х1 = 1
1х2 = 2

...

*/


for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
};

const number = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function sumArray(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }

    return sum;
}

console.log(sumArray(number));