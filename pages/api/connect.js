import mongoose from "mongoose";

// MongoDB Connection Function
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw new Error("Database connection failed");
  }
};

// Next.js API Route
export default async function handler(req, res) {
  try {
    await connectDB();
    res.status(200).json({ message: "Connected to MongoDB" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
