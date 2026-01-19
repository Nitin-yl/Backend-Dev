const os = require("os");
const fs = require("fs");

const logFile = "system-log.txt";

function logSystemInfo() {
  const info = `
Time: ${new Date().toISOString()}
Platform: ${os.platform()}
CPU Cores: ${os.cpus().length}
CPU Model: ${os.cpus()[0].model}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
`;

  fs.appendFile(logFile, info, (err) => {
    if (err) console.error("Error writing log:", err);
  });
}

setInterval(logSystemInfo, 5000);

