const fs = require("fs");

fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) {
    console.error("Error copying file:", err);
  } else {
    console.log("File copied successfully!");
  }
});

fs.copyFileSync("source.txt", "destination.txt");
console.log("file copied successfully!");



fs.unlink("destination.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully!");
  }
});

fs.unlinkSync("destination.txt");
console.log("file deleted successfully!");
