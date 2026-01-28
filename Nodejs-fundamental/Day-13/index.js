const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "input.txt");
const outputPath = path.resolve(__dirname, "output.txt");

const readStream = fs.createReadStream(inputPath);
const writeStream = fs.createWriteStream(outputPath);

readStream.pipe(writeStream);
