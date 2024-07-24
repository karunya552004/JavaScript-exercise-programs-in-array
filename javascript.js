//Array spreading
const arr1=[1,3,5,7];
const arr2=[2,4,6,8];
const combine=[...arr1,...arr2];
console.log(combine);

//finding longest string in the array
let arr = [
    "It is a beautiful day",
    "This place is wonderful",
    "Japanese has the fastest internet in the world"
];
function longestString() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
console.log(longestString());


//removing element in the specified index
let indexForRemoval = 2;
let numArray = [9,43,87,11,98];
numArray.splice(indexForRemoval,1);
console.log("Array Elements After Removing Element At Index: " + indexForRemoval + " is " + numArray);


//inserting element at a specified index
function insertElement() {
    let arr = [4,6,8,9, 10];
    let index = 3;
    let element = -76;
arr.splice(index, 0, element);
    console.log(arr);
}
insertElement();


//array rotation
function rotatearray(arr, rotateBy) {
    const n = arr.length;
    rotateBy %= n;
 
    return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}
 
const originalArray = [12,13,14,15,16];
const rotatedarray = rotatearray(originalArray, 3);
console.log(rotatedarray);


