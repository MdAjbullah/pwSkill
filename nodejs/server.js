const http= require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': '/'});
    res.write('<h1>Hello World!</h1>');
    res.end();
    console.log('server started on http://localhost:8080')
}).listen(8080);
console.log('server started on http://localhost:8080')
