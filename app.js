const fs = require("fs");

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 16 * 1024 // max size of buffer
});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(data) {
    writable.write(data);
});