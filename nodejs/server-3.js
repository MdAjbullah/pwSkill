const http= require('http');
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