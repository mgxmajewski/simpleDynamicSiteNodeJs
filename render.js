const fs = require("fs");

function view(templateName, values, res) {
    //Read from template file
    const fileContents = fs.readFileSync('./views/' + templateName + '.html');
    //Insert values in to the content

    //Write out the contents to the response
    res.write(fileContents);
}

module.exports.view = view;