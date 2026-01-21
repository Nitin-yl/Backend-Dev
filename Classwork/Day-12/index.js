const fs = require("fs");

// making folder
// fs.mkdir('asyncdirectory', (err) => {
//     if (err) {
//         return console.error('Error creating directory:', err);
//     }
//     console.log('Directory created successfully.');
// });

// fs.mkdirSync('Syncdirectory');
// console.log('Another directory created successfully.');

// removing folder
// fs.rmdir('asyncdirectory', (err) => {
//     if (err) {
//         return console.error('Error removing directory:', err);
//     }
//     console.log('Directory removed successfully.');
// });

// fs.rmdirSync('Syncdirectory');
// console.log('Another directory removed successfully.');

// reading folder
// fs.readdir(".", (err, files) => {
//   if (err) {
//     return console.error("Error reading directory:", err);
//   }
//   console.log("Files in directory:", files);
// });

// fs.readdirSync(".");
// console.log("Files in directory (sync):", fs.readdirSync("."));

// removing folder with files inside
fs.rm("asyncdirectory", { recursive: true, force: true }, (err) => {
  if (err) {
    return console.error("Error removing directory recursively:", err);
  }
  console.log("Directory removed recursively successfully.");
});

fs.rmSync("Syncdirectory", { recursive: true, force: true });
console.log("Another directory removed recursively successfully.");
