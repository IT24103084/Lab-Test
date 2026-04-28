import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Connect DB + start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
  })
  .catch(err => {
    console.log("Database connection error:", err);
  });