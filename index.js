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

function newUserObject(user) {
    return {
        fullname: `${user.name} ${user.lastName}`,
        age: user.age,
        email: user.email
    }
}

const newUsersArray = users.map((item) => {
    return newUserObject(item);
})

/*

const newUsersArray = users.map((item) => {
    return {
        fullname: `${item.name} ${item.lastName}`,
        age: item.age,
        email: item.email
    }
});

*/