/*

const userTel1 = '380931111111';
const userTel2 = '380932222222';
const userTel3 = '380933333333';

const userTels = {
    1: '380931111111',
    2: '380932222222',
    3: '380933333333'
}

// make massiv 1

const arr = [2, 4, 6, 7]

// make massiv 2

const arr2 = new Array(1, 2, 4, 'Oleg');

//

*/

/*

arr2[0] = 4;

if(arr2.length > 3) {
    console.log('sssssssssssssss');
} else {
    console.log('TTTTTTT');
}

console.log(arr2[3]);

arr2[5] = 13;

console.log(arr2);

*/

//task1

/*

const array = [7, 3, 5, 2];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

*/

//task2 

/*

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < array2.length; i++) {
    if(array2[i] % 2 === 0) {
        console.log(array2[i]);
    }
}

*/

/*

const array = [3, 6, 8, 2, 3, 5, 1];

function sumArray(array) {
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        result = result + array[i];
    }

    return result;
}

*/

const array = [3, 6, 8, 2, 3, 5, 1];

function largeNumber(array) {
    let max = array[0];

    for(let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }       
    }

    return max;
}