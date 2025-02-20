import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    budget: String,
    message: String,
  },
  { timestamps: true } // Adds `createdAt` & `updatedAt` fields automatically
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
