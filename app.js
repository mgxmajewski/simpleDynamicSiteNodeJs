//Create a web server
    //response.end('Hello World/n');
const router = require("./router")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    router.home(req, res);
    router.user(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});