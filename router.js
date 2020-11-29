const Profile = require("./profile.js");

const render = require("./render.js");

//Handle HTTP route GET / and POST / i.e. Home
function home(req, res) {
    //if url == "/" && GET
    if (req.url === "/") {
        //show search
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        render.view("header", {}, res);
        render.view("search", {}, res);
        render.view("footer", {}, res);
        res.end();
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
        render.view("header", {}, res);
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
            render.view("profile", values, res);
            render.view("footer", {}, res);
            res.end();
        });

        //on "error"
        studentProfile.on("error", function (error){
            //show error
            render.view("error", {errorMessage: error.message}, res);
            render.view("search", {}, res);
            render.view("footer", {}, res);
            res.end();
        });

    }
}

module.exports.home = home;
module.exports.user = user;