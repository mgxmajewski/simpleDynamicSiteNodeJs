const Profile = require("./profile.js");
const render = require("./render.js");
const querystring = require("querystring");
const name = 'Content-Type';
const value = 'text/html';


//Handle HTTP route GET / and POST / i.e. Home


function home(req, res) {
    //if url == "/" && GET
    if (req.url === "/") {
        if(req.method.toLowerCase() === "get") {
            //show search
            res.statusCode = 200;

            res.setHeader(name, value);
            render.view("header", {}, res);
            render.view("search", {}, res);
            render.view("footer", {}, res);
            res.end();
        } else {
            //if url == "/" && POST

            //get the post data from body
            req.on("data", function (postBody){
                //extract the user name
                const query = querystring.parse(postBody.toString());
                res.write(query.username);
                res.end();
            });

            //redirect to /:username
        }
    }

}

//Handle HTTP route GET /:username i.e /chalkers
function user(req, res) {
    //if url == "/...."
    let username;
    username = req.url.replace("/", "");
    if (username.length > 0) {
        res.statusCode = 200;
        res.setHeader(name, value);
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