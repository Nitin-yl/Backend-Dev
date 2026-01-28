const fs = require("fs");
const path = require("path");
const { Transform } = require("stream"); 

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "transformoutput.txt");

const readStream = fs.createReadStream(inputFilePath, { encoding: "utf-8" });
const writeStream = fs.createWriteStream(outputFilePath);

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const transformedData = chunk.toString().toUpperCase();
    this.push(transformedData); 
    callback();
  },
});

readStream.pipe(upperCaseTransform).pipe(writeStream);
