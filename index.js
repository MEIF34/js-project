const array = [5, 3, 9, 21, 5, 1, 2, 400];

array.sort();

console.log(array);

const arrayWords = ['bbb', 'abb', 'aaa', 'aba'];

arrayWords.sort();

console.log(arrayWords);

function compareFunction(a, b) {
    return b - a;
}

array.sort(compareFunction);