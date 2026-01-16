const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/product") {
      const name = parsedUrl.query.name;
      const price = Number(parsedUrl.query.price);
      const discount = Number(parsedUrl.query.discount);

      const finalPrice = price - (price * discount) / 100;

      fs.appendFile(
        "searches.txt",
        `Name: ${name}, Price: ${price}, Discount: ${discount}%, Final: ${finalPrice}\n`,
        () => {}
      );

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
      <h2>Product Details</h2>
      <p>Name: ${name}</p>
      <p>Original Price: ${price}</p>
      <p>Discount: ${discount}%</p>
      <p><b>Final Price: ${finalPrice}</b></p>
    `);
    }
  })
  .listen(8000);

console.log("Server running on 8000");
