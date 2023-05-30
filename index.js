// let num1 = Number(prompt('Введіть перше число: '));
// let num2 = Number(prompt('Введіть друге число: '));

// function addTwoNumbers(num1, num2) {
//     const result = num1 + num2;
//     return result;
// }

// let result = addTwoNumbers(num1, num2);
// console.log(result);

// zadacha1

function numberUp(num1, num2) {
    let result;
    if (num1 > num2) {
        result = num1;
    }
    else if (num2 > num1) {
        result = num2;
    }
    return result;
}

let result = numberUp(25, 10);
console.log(result);


// zadacha2

function srArefmet (num3, num4) {
    const result1 = (num3 + num4) / 2;
    return result1;
}

let result1 = srArefmet(7, 8);
console.log(result1);

//zadacha3

function parneOrNeparne (num5) {
    let result3;
    if (num5 % 2 === 0) {
        result3 = console.log('парне');
    } else if (num5 % 2 !== 0) {
        result3 = console.log('непарне');
    }
}

let result3 = parneOrNeparne (7)