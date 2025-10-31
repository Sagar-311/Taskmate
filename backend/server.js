import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/test", (req, res) => {
  res.send("TaskMate backend is running ");
});



// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));