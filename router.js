let Profile;
Profile = require("./profile.js");

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
        //get json from Treehouse

        let studentProfile = new Profile(username);

        //on "end"
        studentProfile.on("end", function (profileJSON) {
            //show profile

            //store the values that we need
            let values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            //simple response
            res.write(values.username + " has " + values.badges + " badges\n");
            res.end("Footer\n");
        });

        //on "error"
        studentProfile.on("error", function (error){
            //show error
            res.end("Footer\n");
        });

    }
}

module.exports.home = home;
module.exports.user = user;