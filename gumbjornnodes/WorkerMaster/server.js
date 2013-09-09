var http = require('http'),
    os = require('os'),
    util = require('util');

var port = process.env.port || 1337,
    availableCpus = os.cpus();


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<body>');
    res.write('<p>' + availableCpus.length + ' cpus</p>')
    res.write('</body>');
    res.end('</html>');
}).listen(port);

availableCpus.forEach(function (cpu) {
    util.log('new server for cpu', cpu);

    var cpuString = util.inspect(cpu, { showHidden: true, depth: null, colors: true });

    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(cpuString);
    }).listen(++ port);
});