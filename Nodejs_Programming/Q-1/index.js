const fs = require("fs");

const inputFile = "input.txt";
const outputFile = "output.txt";

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  const wordCount = data
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const result = `Word Count: ${wordCount}`;

  fs.writeFile(outputFile, result, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Word count written to output.txt");
  });
});
