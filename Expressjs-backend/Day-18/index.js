const express = require("express");
const app = express();

app.use(express.json());

const students = [
  { id: 1, name: "Nitin", branch: "cse" },
  { id: 2, name: "Sarthak", branch: "cse" },
  { id: 3, name: "Anshitva", branch: "cse" },
];

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.get("/user", (req, res) => {
  res.send("Hello beta !");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

app.get("/students/search", (req, res) => {
  const { name, branch } = req.query;

  const result = students.filter(
    (s) =>
      (!name || s.name.toLowerCase().includes(name.toLowerCase())) &&
      (!branch || s.branch === branch),
  );

  res.json(result);
});

app.post("/students", (req, res) => {
  const { name, branch } = req.body;

  if (!name || !branch) {
    return res.status(400).json({ message: "Name and branch required" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    branch,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
