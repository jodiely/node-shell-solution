var directory = require('./commands.js')
var fs = require('fs');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
    const tokens = data.toString().trim().split(' ');
    const cmd = tokens[0];
    const args = tokens.slice(1).join(' ');

    if(directory[cmd])
        directory[cmd](args);
    else 
        process.stderr.write('command not found: ' + cmd);

})

var done = function(output) {
    // cmdArray.shift();
    // if(cmdArray[0] === '|'){
    //     cmdArray.shift();
    //     if(cmdArray[0] === "head"){
    //         directory.head(output, null, done);
    //     }
    // }
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}