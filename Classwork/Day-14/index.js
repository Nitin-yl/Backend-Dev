const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

fs.readFile(inputFilePath, "utf-8", (err, data) => {
  if (err) {
    console.log("Error in reading file:", err);
  } else {
    console.log("File data:");
    console.log(data);
  }
});

const inputStream = fs.createReadStream(inputFilePath, "utf-8");

inputStream.on("data", (chunk) => {
  console.log("Reading data in chunks:");
  console.log(chunk);
});

inputStream.on("error", (err) => {
  console.log("Error while reading file using stream:", err);
});

const writeStream = fs.createWriteStream(outputFilePath);
inputStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Data has been written to output.txt using pipe.");
});
