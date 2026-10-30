import express from "express";

const app = express();
const port = 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
