//1. Create a web server
    //response.end('Hello World/n');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    setInterval(function(){
        res.write(new Date() + "\n");
    }, 1000);

    //res.end('Hello World, I love you');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//2. Handle HTTP route GET / and POST / i.e. Home
    //if url == "/" && GET
        //show search
    //if url == "/" && POST
        //redirect to /:username

//3.  Handle HTTP route GET /:username i.e /chalkers
    //if url == "/...."
        //get json from Treehouse
            //on "end"
                //show profile
            //on "error"
                //show error

//4. Function that handles the reading of files and merge value
    //read from file and get a string
        //merge values in string
