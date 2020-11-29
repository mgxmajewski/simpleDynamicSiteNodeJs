const fs = require("fs");

function mergeValues(values, content) {
    //Cycle over the keys
    for (let key in values) {
        //Replace all{{keys}} with the values from the values object
        content = content.replace("{{" + key + "}}", values[key]);
    }
    //return merged content
    return content;
}

function view(templateName, values, res) {
    //Read from template file
    let fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
    //Insert values in to the content
    fileContents = mergeValues(values, fileContents);
    //Write out the contents to the response
    res.write(fileContents);
}

module.exports.view = view;