
// process does not require a "require", it's automatically available
// the env property which hosts all the environment variables that were set at the moment the process was started.

// const USER_ID = process.env.USER_ID
// const USER_KEY = process.env.USER_KEY


// console.log(`USER_ID: ${USER_ID}, USER_KEY: ${USER_KEY}`);

// .env file in the root directory of your project
require('dotenv').config();

console.log(process.env.USER_ID); // "239482"
console.log(process.env.USER_KEY); // "foobar"
console.log(process.env.NODE_ENV); // "development"
