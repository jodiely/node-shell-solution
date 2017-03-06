var directory = require('./commands.js')
var fs = require('fs');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', function(data) {
//     var cmd = data.toString().trim(); // remove the newline

//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');

// });

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
    } else {
        process.stdout.write('You typed: ' + cmdArray.toString());
        process.stdout.write('\nprompt > ');
    }
})