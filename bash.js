var directory = require('./commands.js')
var fs = require('fs');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
    var cmdArray = data.toString().trim().split(' ');
    var cmd = cmdArray.shift();
    var files = cmdArray;
    if (cmd === "date") {
        var date = new Date(Date.now());
        process.stdout.write(date.toString());
        process.stdout.write('\nprompt > ');
    } else if (cmd === "pwd") {
        directory.pwd();
    } else if (cmd === "ls") {
        directory.ls();
    } else if (cmd === "echo") {
        directory.echo(files);
    } else if (cmd === "cat") {
        directory.cat(files.toString())
    } else if (cmd === "head") {
        directory.head(files.toString())
    } else if (cmd === "tail") {
        directory.tail(files.toString())
    } else if (cmd === "sort") {
        directory.sort(files.toString())
    } else if (cmd === "wc") {
        directory.wc(files.toString())
    } else if (cmd === "uniq") {
        directory.uniq(files.toString())
    } else {
        process.stdout.write('You typed: ' + cmdArray.toString());
        process.stdout.write('\nprompt > ');
    }
})