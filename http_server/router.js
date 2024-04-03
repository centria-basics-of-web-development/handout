const controller = require('./controller');

const handleRequest = async (request, response) => {
    const { url, method } = request;
    if (method === 'GET' && !url.match(/^\/api/)) {          
        controller.uiController.get(request.url.substring(1), function(data) {
            response.writeHead(200);
            response.write(data);
            response.end();
        }, function(err) {
            response.writeHead(500);
            response.write(err.message);
            response.end();
        });
    } else if (method === 'GET' && url === '/api/data') {
        controller.dataController.getData(function(data) {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(data);
            response.end();
        }, function(err) {
            response.writeHead(500);
            response.write(err.message);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end();
    }
};

module.exports = handleRequest;