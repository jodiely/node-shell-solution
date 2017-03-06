var fs = require('fs');

function pwd() {
    process.stdout.write(process.cwd());
    process.stdout.write("\nprompt > ");
}

function ls() {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
    });
}

function echo(cmdArray) {
    var echoString = "";
    for (var i = 0; i < cmdArray.length; i++) {
        echoString += cmdArray[i] + " ";
    }
    process.stdout.write(echoString.trim());
    process.stdout.write("\nprompt > ");
}

function cat(file) {
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
    process.stdout.write("\nprompt > ");
}

module.exports = { pwd, ls, echo, cat }