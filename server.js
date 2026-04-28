import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Root route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

const PORT = process.env.PORT || 8080;

// Connect DB FIRST, then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log("Server running on port", PORT);
    });
  })
  .catch(err => {
    console.log("Database connection error:", err);
  });