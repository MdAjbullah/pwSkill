const http = require('http');

const HOSTNAME = 'localhost';
const PORT =3021;
const server = http.createServer((req, res) => 
{
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify({error:'Hello World!'}));
});
server.listen(PORT, () => {
    console.log(`server runing at ${HOSTNAME}:${PORT}`);
});