// 1 задача

let min = 65;
if (0 <= min && min <= 15) {
    console.log('перша чверть');
} else if (min >= 16 && min <= 30) {
    console.log('друга чверть');
} else if (min >= 31 && min <= 45) {
    console.log('третя чверть');
} else if (min >= 41 && min <= 60) {
    console.log('четверта чверть');
} else {
    console.log('введи правильное время!');
}

// 2 задача

const num1 = 23.3;
const num2 = 24;
if (num1 < num2) {
    console.log(num2);
} else {
    console.log(num1);
}

// 3 задача

let year = 2023;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + ' високосний');
} else {
    console.log(year + ' невисокосний');
}

// 4 задача

let d1 = 3;
let d2 = 12;
let numb = 18;
if (numb >= d1 && numb <= d2) {
    console.log('в діапазоні');
} else {
    console.log('не в діапазоні');
}

// 5 задача

let n = 30;
let m = 15;
let k = 33;
if (m >= n && k >= n) {
    console.log('Блокнотів і ручок вистачає на всіх учасників');
} else {
    console.log('Блокнотів і ручок не вистачає на всіх учасників');
}

// 6 задача

let age = 13;
let sale = true;;
if (age < 6) {
    console.log('Вхід безкоштовний');
} else if (age >= 6 && age <= 12) {
    console.log('Квиток коштує $10');
} else if (age > 12 && sale === false) {
    console.log('Квиток зі знижкою 50% для дорослих');
} else if (age > 12 ) {
    console.log('Квиток коштує $20');
}
