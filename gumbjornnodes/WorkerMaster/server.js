var cp = require('child_process'),
    http = require('http'),
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
    var cpuString = util.inspect(cpu, { showHidden: true, depth: null, colors: true });
    util.log('Fork server process', cpuString);

    var child = cp.fork('./child.js', [++ port]);
});