/*

// task - doubleloop

const numbersss = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function ppNp(array) {
    for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length; j++) {
                if (i % 2 === 0) {
                    return array[[i][j]];
                }
            }
    }
}

console.log(ppNp(numbersss));

//

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

*/

// practice-task-REST-1

function rest (...arrayOfRestArguments) {
    console.log(arrayOfRestArguments);

}

// practice-task-REST-2

function rest2 (...arrayOfRestArguments) {
    return Math.max(...arrayOfRestArguments);
}

// practice-task-SPREAD-3

const obj1 = {
    name: 'QQQ',
    age: 404,
    color: 'red'
}

const obj2 = {
    name2: 'WWW',
    age2: 7,
    color2: 'green'
}

const obj3 = {
    ...obj1,
    ...obj2
}

// practice-task-REST-4

// ???

// practice-task-REST-SPREAD-5

function rest5 (array, ...rest) {
    const arrRest = [...rest];
    const arr = [...array, ...arrRest];
    return arr;
}

//practice-task-6

// ???