const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  budget: String,
  message: String,
}, { timestamps: true });  // ⬅️ This automatically adds 'createdAt' & 'updatedAt'

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
