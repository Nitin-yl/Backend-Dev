const http = require("http");
const fs = require("fs");

const PORT = 8000;

const myserver = http.createServer((req, res) => {
  if (req.url === "/complain") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", () => {
      if (data === "") {
        res.end("No data received");
        return;
      }

      const obj = JSON.parse(data);

      const ticketId = "TKT-" + Math.floor(Math.random() * 1000);

      const text =
        "Ticket ID: " +
        ticketId +
        "\n" +
        "Name: " +
        obj.name +
        "\n" +
        "Issue: " +
        obj.issue +
        "\n" +
        "Priority: " +
        obj.priority +
        "\n\n";

      if (obj.priority === "high") {
        fs.appendFile("URGENT.txt", text, () => {});
      } else {
        fs.appendFile("Normal.txt", text, () => {});
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          ticketId: ticketId,
          message: "We will solve your issue soon",
        })
      );
    });
  }
});

myserver.listen(PORT, () => {
  console.log("server is connected");
});
