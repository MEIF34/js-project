const array = [3, 6, 8, 2, 3, 5, 1];

function srArefm(array) {
    let sr = 0;
    for(let i = 0; i < array.length; i++) {
        sr = (sr + array[i]);
    }
    return sr / array.length;
}