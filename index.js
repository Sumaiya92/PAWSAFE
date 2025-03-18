import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./db.config/connect.js";
import adoptionRoutes from './routes/adoptionRoute.js'
import vetRoutes from './routes/vetRoutes.js'

config();
const app = express();

// Middleware
app.use(json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/adoption",adoptionRoutes);
app.use("/api/vet", vetRoutes);



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
