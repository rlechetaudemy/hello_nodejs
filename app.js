var port = process.env.PORT || 3000;
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.JS 4!');
}).listen(port);
console.log('Server running at http://localhost:8080/');
