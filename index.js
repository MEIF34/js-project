const array = [1, 5, 3, -9, 21, -5, 1, -1, -2];

function filterFunc(element) {
    // if(element > 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return element > 0;
}

const filteredArray = array.filter(filterFunc);
