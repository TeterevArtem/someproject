"use strict";

// let a = 10;
// let b = 20;
// console.log(a);
// a = b;
// console.log(a);

const obj = {
  a: 10,
  b: 20
};

let objCopy = {...obj};
objCopy.a = 40;
console.log(objCopy);
console.log(obj);

// let objCopy = {};
// const another = Object.assign({}, obj);
// function copy(mainObj) {

//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;

// }

// copy(obj);
// objCopy.a = 40;
// console.log(obj);
// console.log(objCopy);

// another.a = 40;
// console.log(obj);
// console.log(another);

// another.a = 30;
// console.log(obj);
// console.log(another);

//Массивы

let arr = [1,2,3,4,5];
let arr2 = [...arr];
// let arr2 = arr.slice();

arr2[3] = 10;
console.log(arr);
console.log(arr2);
