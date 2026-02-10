const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// -------- HEALTH ROUTE --------
app.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    message: "Server is running"
  });
});

// -------- SAMPLE POST ROUTE --------
app.post("/test", (req, res) => {
  res.status(200).json({
    is_success: true,
    received: req.body
  });
});

// -------- ERROR HANDLER --------
app.use((err, req, res, next) => {
  res.status(500).json({
    is_success: false,
    message: "Internal Server Error"
  });
});

// -------- START SERVER --------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
