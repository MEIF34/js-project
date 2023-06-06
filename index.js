//task1

function rectangle(height, width) {
    const area = height * width;

    return area;
}

//task2

const pi = 3.14;

function circle(diametr) {
    const lenght = pi * diametr;

    return lenght;
}

//task3

function cylinder(heightCylinder, diametrWarp) {
    const cylinderCapacity = pi * heightCylinder * (diametrWarp / 2) ** 2;

    return cylinderCapacity;
}

//task4

function range(num1, num2) {
    for(let i = num1; i >= num1 && i <= num2; i++) {
        if(i % 5 === 0) {
            console.log(i);
        }
    }
}

//task6

function fizzbuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

//task*

function quadraticEquation(a, b, c) {
    const D = (b ** 2) - (4 * a * c);
    const x1 = (b + Math.sqrt(D)) / (2 * a);
    const x2 = (b - Math.sqrt(D)) / (2 * a);

    return console.log('D = ' + D + ' x1 = ' + x1 + ' x2 = ' + x2);
} 
