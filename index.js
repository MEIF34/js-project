// let iterator = 0;

// while (iterator < 10) {
//     if (iterator % 2 === 0) {
//         console.log(iterator);
//     }
//     iterator++;
// }

let password = 'qwerty1234';
let pass = prompt ('Введи правильний пароль: ');

while (pass !== password) {
    pass = prompt ('Невірний пароль. Спробуй ще!');
}