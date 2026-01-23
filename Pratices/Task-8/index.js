const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;
const logFile = path.join(__dirname, "access.log");

const server = http.createServer((req, res) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  const log = `[${timestamp}] | Method: ${method} | URL: ${url}\n`;

  fs.appendFile(logFile, log, (err) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error logging request");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Request Logged Successfully!");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
