import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Start server FIRST
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

// Connect DB (separately)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch(err => console.log("Database connection error:", err));