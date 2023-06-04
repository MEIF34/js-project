function greeting(user) {
    return `Hello, ${'name' in user ? user.name : 'Anonym'}!`;
}

const user = {
    name: 'John',
}

const user2 = {
    name: 'Doe',
}