'use strict';

console.log(this); // this вказує на глобальний об'єкт Window

// Контекст виконання

function test() { // Function Declaration
    console.log(this); // вказує на функцію
}

test();

const test2 = function() { // Function Expression
    console.log(this); // вказує на функцію
}

test2();

const arrow = () => { // Arrow Function не мают свого контексту виконання
    console.log(this); // this вказую на глобаьний об'єкт Window
}

arrow();

function sum() {
    const arrow = () => { // Arrow Function не мают свого контексту виконання
        console.log(this); // this вказую на глобаьний об'єкт Window
    }
}

sum();