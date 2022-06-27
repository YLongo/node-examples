
setTimeout(() => {
    console.log('runs after 2 seconds')
}, 2000);

setTimeout(() => {
    console.log('runs after 50 milliseconds')
}, 50);

const myFunction = (first, second) => {
    console.log(first, second)
}

setTimeout(myFunction, 1000, 'first', 'second')

const id = setTimeout(() => {
    console.log('this scheduled will be deleted')
}, 2000);

clearTimeout(id)


const intervalId = setInterval(() => {
    console.log('runs every 2 seconds')
}, 2000);

setTimeout(() => {
    // after 10 seconds clear this interval
    clearInterval(intervalId)
}, 10 * 1000);