import express from "express";

const app = express();
app.use(express.json()); // Ensure JSON body parsing

// ✅ Route for GET /numbers
let storedNumbers: number[] = [];

app.get("/numbers", (req, res) => {
  res.json({ numbers: storedNumbers });
});

// ✅ Route for POST /numbers
app.post("/numbers", (req, res) => {
  const { numbers } = req.body;
  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "Invalid data format" });
  }
  storedNumbers = [...storedNumbers, ...numbers]; // Store numbers
  res.json({ message: "Numbers added successfully", numbers: storedNumbers });
});

// ✅ Ensure the server is listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
