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
    setTimeout(function() {
        process.stdout.write("\nprompt > ");
    }, 10);
}

function head(file){
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n');
        for (var i = 0; i < 5; i++){
            console.log(data[i]);
        }
    });
    setTimeout(function() {
        process.stdout.write("\nprompt > ");
    }, 10);  
}

function tail(file){
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n');
        for (var i = data.length-5; i < data.length; i++){
            console.log(data[i]);
        }
    });
    setTimeout(function() {
        process.stdout.write("\nprompt > ");
    }, 10);
}

function sort(file){
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n').sort();
        for (var i = 0; i < data.length; i++){
            console.log(data[i]);
        }
    });
    setTimeout(function() {
        process.stdout.write("\nprompt > ");
    }, 10);
}

function wc(file){
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n');
            console.log(data.length);
    });

    setTimeout(function() {
        process.stdout.write("\nprompt > ");
    }, 10);
}

function uniq(file){
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) throw err;
        data = data.split('\n').sort();
        var newData = [];
        for (var i = 0; i < data.length; i++){
            if (newData.indexOf(data[i]) === -1){
                newData.push(data[i]);
            }
        }

        for (var i = 0; i < newData.length; i++){
            console.log(newData[i]);
        }
    });
    setTimeout(function() {
        process.stdout.write("\nprompt > ");
    }, 10);
}

module.exports = { pwd, ls, echo, cat, head, tail, sort, wc, uniq }