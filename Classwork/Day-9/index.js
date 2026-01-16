const http = require("http");
const fs = require("fs");
const url = require("url")

const server = http.createServer((req, res) => {

const parseurl = url.parse(req.url, true)
const name = parseurl.query.name
console.log(name);

//     const timestamp = new Date().toLocaleString();

//   const log = `User requested at: ${timestamp} , Request URL: ${req.url}\n`;

  fs.appendFile("./activity.log", log, (err) => {
    if (err) {
      console.log("Fail to write log");
    } else {
      console.log("Log written successfully");
    }
  });
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome to Home Page</h1>");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>About Us Page</h1>");
      break;

    case "/contact":
      const user = {
        id: 1,
        name: "Nitin Goyal",
        contact: "7080809670",
      };

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Contact Us</h1>" + "<p>Contact: " + user.contact + "</p>");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Page Not Found</h1>");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
