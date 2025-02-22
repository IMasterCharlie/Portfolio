import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "@/app/config/db.js";
import contactRoutes from "@/app/routes/contactRoutes.js";
import errorHandler from "@/app/middleware/errorHandler.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", contactRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
