//Handle HTTP route GET / and POST / i.e. Home
function home(req, res) {
    //if url == "/" && GET
    if (req.url === "/") {
        //show search
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("Header\n");
        res.write("Search\n");
        res.end("Footer\n");
    }
    //if url == "/" && POST
    //redirect to /:username
}

//Handle HTTP route GET /:username i.e /chalkers
function user(req, res) {
    //if url == "/...."
    let username;
    username = req.url.replace("/", "");
    if (username.length > 0) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("Header\n");
        res.write(username + "\n");
        res.end("Footer\n");
        //get json from Treehouse
        //on "end"
        //show profile
        //on "error"
        //show error
    }
}

module.exports.home = home;
module.exports.user = user;