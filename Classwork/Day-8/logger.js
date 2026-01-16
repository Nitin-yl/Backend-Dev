const fs = require("fs");
const logFilePath = "./app.log"; 

function logActivity(message) {
  const timestamp = new Date().toLocaleString();
  const logMessage = `[${timestamp}] - ${message}\n`;

  fs.appendFile(logFilePath, logMessage, (error) => {
    if (error) console.error("Failed to write log:", error);
  });
}

module.exports = { logActivity };
