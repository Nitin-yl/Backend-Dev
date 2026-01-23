const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (pathname === "/secure") {
    const { user, key } = query;

    if (user === "admin" && key === "secret") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to the Vault");
    } else {
      res.writeHead(401, { "Content-Type": "text/plain" });
      res.end("Access Denied");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server running");
});
