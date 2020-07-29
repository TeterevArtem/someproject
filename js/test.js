"use strict";

const car = {
  brand: "nissan",
  model: "R34 GTR",
  power: 250,
  wheeldrive: "4x4",
  options: {
    color: "blue",
    turbo: true,
    widebody: "RocketBanny"
  },
  log: function () {
    console.log(this.model);
    
  }
};

// for (let option in car) {
//   console.log(option);
// }

// for (let option in car) {
//   console.log(`this key ${option} has value: ${car[option]}`);
// }

let counter = 0;
for (let option in car) {
  if (typeof(car[option]) === "object") {
    for (let i in car[option]) {
      console.log(`this key ${i} has value: ${car[option][i]}`);
      counter++;
    }
  }else{
    console.log(`this key ${option} has value: ${car[option]}`);
    counter++;
  }
}
console.log(counter);
console.log(Object.keys(car));
console.log(car.log());

const {color, turbo, widebody} = car.options;

console.log(color);
console.log(turbo);
console.log(widebody);