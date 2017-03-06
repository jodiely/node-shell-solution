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
        directory.pwd(files, done);
    } else if (cmd === "ls") {
        directory.ls(files, done);
    } else if (cmd === "echo") {
        directory.echo(files, done);
    } else if (cmd === "cat") {
        directory.cat(files.toString(), done)
    } else if (cmd === "head") {
        directory.head(files.toString(), done)
    } else if (cmd === "tail") {
        directory.tail(files.toString(), done)
    } else if (cmd === "sort") {
        directory.sort(files.toString(), done)
    } else if (cmd === "wc") {
        directory.wc(files.toString(), done)
    } else if (cmd === "uniq") {
        directory.uniq(files.toString(), done)
    } else if (cmd === "curl") {
        directory.curl(files.toString(), done)
    } else {
        process.stdout.write('You typed: ' + cmdArray.toString());
        process.stdout.write('\nprompt > ');
    }
})

var done = function(output) {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}