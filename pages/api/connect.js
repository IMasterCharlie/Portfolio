import connectDB from "@/app/config/db";

export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({ message: "Connected to MongoDB" });
}
