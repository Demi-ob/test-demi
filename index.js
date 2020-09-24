var http = require('http');

(function log(){
    console.log("Hey, I am running on fargate")
    setTimeout(log, 1500);
    
})();


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);