const http = require('http');
const fs = require('fs');
const port = 8989;
const fileRoot = 'www';
const server = http.createServer(
    (request, response) => {
        const fileName = request.url.substring(1);
        const filePath = `${fileRoot}/${fileName}`;
        if (request.method === 'GET') {          
            // Return HTML
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    response.writeHead(404);
                } else {
                    response.writeHead(200);
                    response.write(data);
                }
                response.end();
            });
            
        }
    }

);

server.listen(port);
console.log(`My web server is listening at the port [${port}]`);
