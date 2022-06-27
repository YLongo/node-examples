
// const car = require('./car');

// console.log('module.exports = car;')
// console.log(car);

// console.log("exports.car = car;");
// console.log(car.car);


const tesla = require('./car');

// since the require function's return value has been updated to the object that module.exports points to, so the property that exports added can't be accessed.
// this will print undefined 
const ford = require('./car').car;

console.log(tesla, ford)