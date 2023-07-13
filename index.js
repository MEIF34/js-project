/*

Написати функцію truncate, яка приймає в якості аргументів рядок (str) і довжину (strLength).

Якщо довжина > strLength, то врізати рядок до цієї довжини і в кінці додати "...".

Якщо рядок менший, то нічого не робити.

Приклади роботи функції:

truncate('hello', 2); // 'he...'
truncate('hello', 10); // 'hello'

*/

function truncate(str, strLength) {
    if (str.length > strLength) {
        str = str.slice(0, strLength);
        str = str.concat('...');
    }

    return str;
}

/*

Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra', інакше 'false'

Приклади роботи функції:

checkSpam('buy ViAgRa now'); // true
checkSpam('free xxxxxx'); // true
checkSpam('innocent rabbit'); // false

*/

function checkSpam(str) {
    const newStr = str.toLowerCase();

    if (newStr.includes('xxx', 'viagra')) {
        console.log(true);
    } else {
        console.log(false);
    }
}

/*

Написати функію, яка перевіряє, чи є переданий рядок паліндромом. При тому, функція має працювати таким чином, що вона не повинна зважати на регістр.

Довідка.
Паліндром - це коли рядок з обох сторін читається однаково.

Приклади.
'Anna' - паліндром
'Mama' - не паліндром
'Namman' - паліндром
'2002' - паліндром

*/

// v1

function palindrom(str) {
    str = str.toLowerCase(); // усі букви робимо у нижньому регістрі

    const strArr = [...str]; // додаємо змінену строку в масив
    const newArr = [];

    strArr.forEach(index => { // перебираємо кожен індекс масиву
        newArr.unshift(index); // добавляем елементи в початок newArr
    });

    const reverseStr = newArr.join(''); // об'єднаємо всі елементи для формування нової строки

    return str === reverseStr;
}

// v2

function isPalindrom(str) {
    str = str.toLowerCase();

    return str.split('').reverse().join('') === str;
}