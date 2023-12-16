// Create web server
// Start server: node comments.js
// View at: http://localhost:8080/comments

var http = require('http');
var url = require('url');

var comments = [
  { name: 'Tom', message: 'Hello' },
  { name: 'Jack', message: 'Nice day' },
];

http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  if (pathname === '/comments') {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(comments));
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);