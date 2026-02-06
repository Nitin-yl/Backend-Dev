const express = require("express");
const fs = require("fs-extra");
const path = require("path");

const app = express();
const PORT = 8000;
app.use(express.json());

const DB = path.join(__dirname, "students.json");
   
const readDB = async () => await fs.readJson(DB).catch(() => []);
const writeDB = (data) => fs.writeJson(DB, data, { spaces: 2 });

const validStr = (v) => typeof v === "string" && v.trim();
const validId = (id) => Number.isInteger(id) && id > 0;

const asyncHandler = (fn) => (req, res) =>
  Promise.resolve(fn(req, res)).catch(() =>
    res.status(500).json({ message: "Server error" }),
  );

app.get("/", (_, res) => res.send("Student API Running 🚀"));

app.get(
  "/students",
  asyncHandler(async (req, res) => {
    const students = await readDB();
    const { branch } = req.query;

    res.json(
      branch
        ? students.filter(
            (s) => s.branch.toLowerCase() === branch.toLowerCase(),
          )
        : students,
    );
  }),
);

// GET by ID
app.get(
  "/students/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    if (!validId(id)) return res.status(400).json({ message: "Invalid ID" });

    const student = (await readDB()).find((s) => s.id === id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.json(student);
  }),
);

// POST
app.post(
  "/students",
  asyncHandler(async (req, res) => {
    const { id, name, branch } = req.body;
    if (!validId(id) || !validStr(name) || !validStr(branch))
      return res.status(400).json({ message: "Invalid input data" });

    const students = await readDB();
    if (students.some((s) => s.id === id))
      return res.status(409).json({ message: "ID already exists" });

    const student = {
      id,
      name: name.trim(),
      branch: branch.trim().toUpperCase(),
    };
    await writeDB([...students, student]);

    res.status(201).json({ message: "Student created", student });
  }),
);

// PUT
app.put(
  "/students/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const { name, branch } = req.body;
    if (!validId(id) || (!name && !branch))
      return res.status(400).json({ message: "Invalid input" });

    const students = await readDB();
    const student = students.find((s) => s.id === id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    if (validStr(name)) student.name = name.trim();
    if (validStr(branch)) student.branch = branch.trim().toUpperCase();

    await writeDB(students);
    res.json({ message: "Student updated", student });
  }),
);

// DELETE
app.delete(
  "/students/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    if (!validId(id)) return res.status(400).json({ message: "Invalid ID" });

    const students = await readDB();
    const filtered = students.filter((s) => s.id !== id);
    if (students.length === filtered.length)
      return res.status(404).json({ message: "Student not found" });

    await writeDB(filtered);
    res.json({ message: "Student deleted" });
  }),
);

app.use((_, res) => res.status(404).json({ message: "Route not found" }));

app.listen(PORT, () =>
  console.log(`Server running → http://localhost:${PORT}`),
);
