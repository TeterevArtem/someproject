"use strict";

const soldier = {
  health: 100,
  armor: 100,
  weapon: "M4A-1",
  attack: function() {
    console.log('Tra-ta-ta');
  }
};
const john = {
  health: 400
};
Object.setPrototypeOf(john, soldier);


// const john = Object.create(soldier);
// john.health = 500;


// john.__proto__ = soldier;
console.log(john);
console.log(john.armor);
console.log(john.attack());

// let str = 'some';
// let strObj = new String;

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);


