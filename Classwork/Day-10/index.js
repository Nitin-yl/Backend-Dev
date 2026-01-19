const fs = require("fs");
const os = require("os");

function logSystemInfo() {
  const totalMemory = os.totalmem() / (1024 * 1024 * 1024);
  const freeMemory = os.freemem() / (1024 * 1024 * 1024);
  const platform = os.platform();
  const cpu = os.cpus()[0].model;
  const uptime = os.uptime() / 3600;
  const timestamp = new Date().toLocaleString();

  const log = `
                Time : ${timestamp}
                Total Memory : ${totalMemory.toFixed(2)} GB
                Free Memory : ${freeMemory.toFixed(2)} GB
                Platform : ${platform}
                CPU : ${cpu}
                Uptime : ${uptime.toFixed(2)} hours
            `;

  fs.appendFile("system_info.log", log, (err) => {
    if (err) {
      console.log("Failed to write system info log");
    } else {
      console.log("System info logged at", timestamp);
    }
  });
}

setInterval(logSystemInfo, 8000);
