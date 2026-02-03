const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

let students = [
  { id: 1, name: "Nitin", branch: "cse" },
  { id: 2, name: "Anshitva", branch: "ece" },
  { id: 3, name: "Sarthak", branch: "diploma" },
];

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

app.get("/students-by-branch", (req, res) => {
  const branch = req.query.branch;
  const result = students.filter((s) => s.branch === branch);
  res.json(result);
});

app.post("/students", (req, res) => {
  const { name, branch } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    branch,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});    
