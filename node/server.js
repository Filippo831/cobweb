const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const page = url.parse("http://127.0.0.1:5500/html/index.html", true);
    console.log(page);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<p>cioa come va la vita </p>");
});
server.listen(8080);
