const http= require('http');
const PORT = 3021;
const HOSTNAME = 'localhost';


const serve= http.createServer((req, res) => {
    // home page
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the home page</h1>');
        res.end();
    }
    // about page
    else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the about page</h1>');
        res.end();
    }
    // contact page
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the contact page</h1>');
        res.end();
    }
    // products page
    else if(req.url === '/products'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the products page</h1>');
        res.end();
    }
    // 404 page
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});
serve.listen(PORT, () => {
    console.log(`server runing at http://${HOSTNAME}:${PORT}`);
});
const option={
    hostname: 'localhost',
    // port: 3021,
    path: '/',
    method: 'GET'
}

const apliRes = http.request(option, (apliRes) => {
    apliRes.on('data', (data) => {
        console.log(data);
    });
});
apliRes.on('error', (e) => {
    console.log(e);
});
apliRes.end();