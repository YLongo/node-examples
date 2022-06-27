

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

console.log('\nargs ---');

// node app.js joe
const args = process.argv.slice(2);
console.log(args[0]);

console.log('\nargs1 ---');

// node app.js name=joe
const args1 = require('minimist')(process.argv.slice(2))
console.log(args1.name);