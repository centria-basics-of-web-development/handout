const http = require('http');
const handleRequest = require('./router');
const port = 8989;

const server = http.createServer(handleRequest);

server.listen(port);
console.log(`My web server is listening at the port [${port}]`);
