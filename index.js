const array = [1, 5, 3, -9, 21, -5, 1, -1, -2];

function reducer(accumultor, elem) {
    return accumultor + elem;
}

const sum = array.reduce(reducer, 0);