
const http = require('http')

const port = process.env.PORT || 3000

console.log(`port: ${port}`)

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/json;charset=UTF-8')
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World</h1>')
});

server.listen(port, () => {
    console.log(`server running at port ${port}`)
})