var http = require('http');

var apiai = require("apiai");

var app = apiai("7301d83b3b9444e8bd4ef3ac3cf97c7b");

var code = 405;

var server = http.createServer(function(request, response) {
    if (request.method == 'POST' && request.url == '/upload') {
        var voiceRequest = app.textRequest('hello');
        res.json({'x':'abxd'});
        voiceRequest.on('response', function(_response) {
            response.end(JSON.stringify(_response));
        });

        voiceRequest.on('error', function(error) {
            console.log(error);
            response.end();
        });

        request.on('data', function(chunk) {
            voiceRequest.write(chunk);
        });

        request.on('end', function() {
            voiceRequest.end();
        });
    } else {
        response.writeHead(code, {});
        response.end();
    }

    console.log(request.headers);
});

server.listen(8000);
