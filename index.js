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

function filterFunc(elem) {
    if(elem !== undefined) {
        return true;
    } else {
        return false;
    }
};

const newUsers = users.map(function(user) {
    if (user.age >= 18) {
        return {
            fullname: `${user.name} ${user.lastName}`,
            age: user.age,
            email: user.email
        }
    }
}).filter(filterFunc);

console.log(newUsers);

//task 2

const number = [1, 80, 41, 2, 92];

function compareFunction(a, b) {
    if (b > a) {
        return 1;
    } else {
        return -1;
    }
}

number.sort(compareFunction);

console.log(number);

//task 3

const doubleNumbers = [27, 22, 2, 27, 45];

function filterFunc2(elem) {
    if(elem % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

const newDoubleNumbers = doubleNumbers.filter(filterFunc2);

console.log(newDoubleNumbers);

//task 4

const number2 = [24, 21, 89, 20, 13];

function reducer(accumulator, elem) {
    return accumulator + elem;
}

function filterFunc3(elem) {
    if(elem % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const sum = number2.reduce(reducer, 0);
const double = number2.filter(filterFunc3);
const sumDouble = double.reduce(reducer, 0);

console.log(`sum = ${sum}`);
console.log(`sumDouble = ${sumDouble}`);

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

const newCarArray = catArray.map(function(cat) {
    return {
        name: cat.name
    }
})

console.log(newCarArray);