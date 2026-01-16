const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)


// write

// fs.writeFileSync("./text.txt", "hello, my name is nitin"); // sync code of written something in file

// fs.writeFile("./text.txt", "Hi, now i am working on async way", (err) => {           // async way of wriiten something
//     console.log(err);
// })

// read

// const res = fs.readFileSync("./text.txt", "utf8")   // sync way
// console.log(res)

// fs.readFile("./text.txt", "utf8", (err, res) => {   // async way
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(res)
//     }
// })

// update / append

// fs.appendFileSync("./text.txt", new Date().toDateString()) // sync way

// fs.appendFile("./log.txt", "Hello guy's, i am Nitin Goyal \n", (err, res) => {  // async way
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// delete 

// fs.unlinkSync("./log.txt") // sync way

// fs.unlink("./log.txt", (err, res) => {  // async way
//     if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// })



