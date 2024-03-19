const http = require('http');
const fs = require('fs');
const port = 9090;
const server = http.createServer(
    (request, response) => {
        if (request.url === '/index') {
            if (request.method === 'GET') {
                console.log('here is the handler for GET method');
                console.log(request.headers['accept']);
                
                // Return HTML
                const fileBuffer = fs.readFileSync('./www/index.html');
                response.writeHead(200);
                response.write(fileBuffer.toString());
                response.end();
            }
        }
        if (request.url === '/about') {
            if (request.method === 'GET') {
                console.log('here is the handler for GET method');
                console.log(request.headers['accept']);
                
                // Return HTML
                const fileBuffer = fs.readFileSync('./www/about.html');
                response.writeHead(200);
                response.write(fileBuffer.toString());
                response.end();
            } 
        }
        if (request.url === '/contact') {
            if (request.method === 'GET') {
                console.log('here is the handler for GET method');
                console.log(request.headers['accept']);
                
                // Return HTML
                const fileBuffer = fs.readFileSync('./www/contact.html');
                response.writeHead(200);
                response.write(fileBuffer.toString());
                response.end();
            } 
        }
        if (request.url === '/script.js') {
            if (request.method === 'GET') {
                console.log('here is the handler for GET method');
                console.log(request.headers['accept']);
                
                // Return HTML
                const fileBuffer = fs.readFileSync('./www/script.js');
                response.writeHead(200);
                response.write(fileBuffer.toString());
                response.end();
            } 
        }  
        if (request.url === '/style.css') {
            if (request.method === 'GET') {
                console.log('here is the handler for GET method');
                console.log(request.headers['accept']);
                
                // Return HTML
                const fileBuffer = fs.readFileSync('./www/style.css');
                response.writeHead(200);
                response.write(fileBuffer.toString());
                console.log(fileBuffer.toString());
                response.end();
            } 
        }  
    }

);

server.listen(port);
console.log(`My web server is listening at the port [${port}]`);
