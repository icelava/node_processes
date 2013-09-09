var http = require('http'),
    os = require('os'),
    util = require('util');

util.inspect(process.argv);
util.inspect(process.execArgv);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(process.pid + '');
}).listen(process.argv[2]);
