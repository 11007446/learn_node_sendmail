var http = require("http"),
    url = require("url"),
    config = require("./config");

function start(handler, router) {
    var servConfig = config.servConfig;
    http.createServer(onRequest).listen(servConfig.port);
    console.log("Server has started in port 8888");

    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, { "Content-Type": "text/plain" });
        var pathname = url.parse(request.url).pathname;
        router.route(pathname, handler.handle);
        console.log("Request complete.");
        response.end();
    }

}

exports.start = start;