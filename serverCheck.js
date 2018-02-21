var http = require("http"),
    app = require("./app"),
    config = require("./config");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    app.checkServer();
    //console.log(msg);
    console.log("Request complete.");
    response.end();
}

function start() {
    var servConfig = config.servConfig;
    http.createServer(onRequest).listen(servConfig.port);
    console.log("Server has started in port 8888");
}

exports.start = start;