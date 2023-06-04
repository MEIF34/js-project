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