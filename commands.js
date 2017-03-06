var fs = require('fs');
var request = require('request');

function pwd(file, done) {
    done(process.cwd());
}

function ls(file, done) {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        var output = "";
        files.forEach(function(file) {
            output += file.toString() + "\n";
        })
        done(output);
    });
}

function echo(file, done) {
    var echoString = "";
    for (var i = 0; i < file.length; i++) {
        echoString += file[i] + " ";
    }
    done(echoString.trim());
}

function cat(file, done) {
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        done(data);
    });
}

function head(file, done) {
    var output = "";
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n');
        for (var i = 0; i < 5; i++) {
            output += data[i] + "\n";
        }
        done(output);
    });
}

function tail(file, done) {
    var output = "";
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n');
        for (var i = data.length - 5; i < data.length; i++) {
            output += data[i] + "\n";
        }
        done(output);
    });
}

function sort(file, done) {
    var output = "";
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n').sort();
        for (var i = 0; i < data.length; i++) {
            output += data[i] + "\n";
        }
        done(output);
    });
}

function wc(file, done) {
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n');
        done(data.length.toString());
    });
}

function uniq(file, done) {
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n').sort();
        var newData = [];
        for (var i = 0; i < data.length; i++) {
            if (newData.indexOf(data[i]) === -1) {
                newData.push(data[i]);
            }
        }
        var output = ""
        for (var i = 0; i < newData.length; i++) {
            output += newData[i] + "\n";
        }
        done(output);
    });
}

function curl(file, done) {
    request(file, function(error, response, body) {
        done(body);
    });
}



module.exports = { pwd, ls, echo, cat, head, tail, sort, wc, uniq, curl }