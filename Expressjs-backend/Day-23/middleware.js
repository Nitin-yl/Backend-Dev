const express = require("express");
const fs = require("fs/promises");

const app = express();
app.use(express.json());

const port = 8000;

app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  await fs.appendFile("./requests.log", log);
  next();
});

app.use((req, res, next) => {
  console.log(`I am middleware 1`);
  next();
});

app.use((req, res, next) => {
  console.log(`I am middleware 2`);
  next();
});

const fileAuthMiddleware = (req, res, next) => {
  console.log("I am checking file access:");
  return res.send("auth failed");
};

const authMiddleWare = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("Token:", token);

  if (token !== "secret-token") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};

const readStudentsFromFile = async () => {
  const data = await fs.readFile("./students.json", "utf-8");
  return JSON.parse(data || "[]");
};

const writeStudentsToFile = async (students) => {
  await fs.writeFile("./students.json", JSON.stringify(students, null, 2));
};

app.get("/students", authMiddleWare, async (req, res) => {
  const students = await readStudentsFromFile();
  return res.status(200).json(students);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
