
const done = true

const isItDoneYet = new Promise((resolve, reject) => {

    if (done) {
        const workDone = 'here is the thing i built'
        resolve(workDone)
    } else {
        const why = 'still working on something else'
        reject(why)
    }

});

console.log(isItDoneYet);

console.log('A more common example ---');

const fs = require('fs')

const getFile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });
}

getFile('.env')
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log("Consuming a promise --- ");

const checkIfItsDone = () => {
    isItDoneYet.then(ok => {
        console.log(ok)
    }).catch(err => {
        console.log(err);
    });
};

checkIfItsDone()

console.log('Chaining promises ---');

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }

    return Promise.reject(new Error(response.statusTest));
};

const json = response => response.json();

const fetch = require("node-fetch");

fetch('https://dummyjson.com/todos')
    .then(status)
    .then(json)
    .then(data => {
        console.log('request succeeded with json response', data);
    })
    .catch(error => {
        console.log('request failed', error);
    });