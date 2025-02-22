import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Define Mongoose Schema & Model
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    budget: String,
    message: String,
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", contactSchema);

// Express App Initialization
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Contact Form Submission Handler
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({
      message: "Form submitted successfully!",
      data: newContact,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Error saving data" });
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
  next();
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
