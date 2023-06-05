/*

const user = {
    name: 'John',
    surname: 'Doe',
    age: 35,
    favoriteColor: 'red',
    avatar: 'https://...'
}

console.log(`${user.name} ${user.surname} ${user.age} ${user.favoriteColor} ${user.avatar}`);

for (let key in user) {
    console.log(`${key} --- ${user[key]}`);
}

*/

//task1

/*

function znachObj(obj) {
    for (let key in obj) {
        console.log(`'${key}' : **${obj[key]}**`);
    }
}

const obj = {
    name: 'John',
    surname: 'Doe',
    age: 35,
    favoriteColor: 'red',
    avatar: 'https://...'
}

*/

//task2

const departmentSalary = {
    HR: 20000,
    development: 1000000,
    drive: 300,
    assistant: 5000,
    marketing: undefined,
}

function srZnachZp(departmentSalary) {
    let result = 0;
    
    for (let key in departmentSalary) {
        if (typeof departmentSalary[key] === 'number') {
            result = result + departmentSalary[key];
        }
    }

    return result;
}

