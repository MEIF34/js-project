//task1

const users = [
    {
    name: 'John',
    lastName: 'Doe',
    age: 18,
    email: 'meil@com'
    },
    {
    name: 'Jane',
    lastName: 'Doe',
    age: 20,
    email: 'meil@com'
    },
    {
    name: 'Josh',
    lastName: 'Doe',
    age: 17,
    email: 'meil@com'
    },
    {
    name: 'Jake',
    lastName: 'Doe',
    age: 21,
    email: 'meil@com'
    },
    {
    name: 'Jackson',
    lastName: 'Doe',
    age: 17,
    email: 'meil@com'
    },
]

const newUsers = users.map((user) => {
    if(user.age >= 18) {
        return {
            fullname: `${user.name} ${user.lastName}`,
            age: user.age,
            email: user.email
        }
    }
}).filter((user) => {
    if(typeof user === 'object') {
        return true;
    } else {
        return false;
    }
})

console.log(newUsers);

//task 2

const number = [1, 80, 41, 2, 92];

number.sort((a, b) => {
    if (b > a) {
        return 1;
    } else {
        return -1;
    }
});

console.log(number);

//task 3

const doubleNumbers = [27, 22, 2, 27, 45];

const newDoubleNumbers = doubleNumbers.filter((elem) => {
    if(elem % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(newDoubleNumbers);

//task 4

const number2 = [24, 21, 89, 20, 13];

const sum = number2.reduce((accumulator, currentValue) => {
    if(currentValue % 2 === 0) {
        accumulator = accumulator + currentValue;
    }

    return accumulator;
}, 0);

console.log(`sum = ${sum}`);

// task 5

const catArray = [
    {
        name: 'Murzik',
        color: 'black',
        weight: 3,
        age: 2
    },
    {
        name: 'Murka',
        color: 'grey',
        weight: 5,
        age: 3
    },
    {
        name: 'Barsik',
        color: 'red',
        weight: 2,
        age: 1
    },
    {
        name: 'Cookie',
        color: 'brown',
        weight: 5,
        age: 2
    },
    {
        name: 'Stus',
        color: 'grey',
        weight: 2,
        age: 5
    },
    {
        name: 'Fagot',
        color: 'black',
        weight: 5,
        age: 3
    },
    {
        name: 'Kit',
        color: 'pink',
        weight: 2,
        age: 1
    },

];

const newCatArray = catArray.map((catName) => {
    return catName.name;
});

console.log(newCatArray);