var fs = require('fs');
var request = require('request');

function pwd(stdin, file, done) {
    done(process.cwd());
}

function date(stdin, file, done){
    process.stdout.write(Date());
}

function ls(stdin, file, done) {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        var output = "";
        files.forEach(function(file) {
            output += file.toString() + "\n";
        })
        done(output);
    });
}

function echo(stdin, file, done) {
    const output = args
    .split(' ')
    .map(function (arg){
        return (arg[0] === '$') ? process.en[arg.slice(1)] : arg;
    })
    .join(' ')
    //done(output)

    // var echoString = "";
    // for (var i = 0; i < file.length; i++) {
    //     echoString += file[i] + " ";
    // }
    // done(echoString.trim());
}

function cat(stdin, files, done) {
    if(stdin){
        file = stdin;
    } else {
        file = files[0];
    };

    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        done(data);
    });
}

function head(stdin, files, done) {
    if(stdin){
        file = stdin;
    } else {
        file = files[0];
    };

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

function tail(stdin, file, done) {
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

function sort(stdin, file, done) {
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

function wc(stdin, file, done) {
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n');
        done(data.length.toString());
    });
}

function uniq(stdin, file, done) {
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

function curl(stdin, file, done) {
    request(file, function(error, response, body) {
        done(body);
    });
}



module.exports = { pwd, date, ls, echo, cat, head, tail, sort, wc, uniq, curl }