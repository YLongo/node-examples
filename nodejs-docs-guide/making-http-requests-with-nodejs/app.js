
const axios = require('axios')

axios.get('https://dummyjson.com/todos')
     .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
     })
     .catch(error => {
        console.error(error);
     });


axios.post('https://dummyjson.com/todos')
     .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res)
     })
     .catch(error => {
        console.error(error);
     });