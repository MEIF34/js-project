//task1 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr3);

//task2

const arr4 = arr1.reverse(); // from the first task

console.log(arr4);

//task3

const arr5 = [3, 4, 5];

arr5.push(4, 8, 10);

console.log(arr5);

//task4

const strArr = ['aaa', 'bbb', 'ccc'];

console.log(strArr.pop());

//task5 

const arr6 = ['3', 7, 10];

arr6.unshift(2, 8);

console.log(arr6);

//task6

const arr7 = ['3', 7, 10];

arr8 = arr7.toString();

console.log(arr8);

//forEach

const forEachArr = [2, 44, 11, 234, 8, 2, 4, 1];

// forEachArr.forEach(Element => console.log(Element + 100));

forEachArr.forEach((item, index, array) => {
    console.log(item + 100);
})