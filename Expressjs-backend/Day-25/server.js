const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/student", (req, res) => {
  const filePath = path.join(__dirname, "students.json");
  const newStudent = req.body;

  fs.readFile(filePath, "utf8", (err, data) => {
    let students = [];

    if (!err && data) {
      students = JSON.parse(data);
    }

    students.push(newStudent);

    fs.writeFile(filePath, JSON.stringify(students, null, 2), () => {
      res.redirect("/students");
    });
  });
});

app.get("/students", (req, res) => {
  const filePath = path.join(__dirname, "students.json");
  const { branch } = req.query;

  fs.readFile(filePath, "utf8", (err, data) => {
    let students = [];

    if (!err && data) {
      students = JSON.parse(data);
    }

    if (branch) {
      students = students.filter((s) => s.branch === branch);
    }

    res.render("student", {
      students,
      total: students.length,
      selectedBranch: branch || "",
    });
  });
});

app.get("/students/delete/:id", (req, res) => {
  const filePath = path.join(__dirname, "students.json");
  const id = req.params.id;

  fs.readFile(filePath, "utf8", (err, data) => {
    let students = [];

    if (!err && data) {
      students = JSON.parse(data);
    }
    students = students.filter((s) => s.id !== id);

    fs.writeFile(filePath, JSON.stringify(students, null, 2), () => {
      res.redirect("/students");
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
