import Contact from "../models/Contact.js"; // ✅ Ensure .js extension

// Handle form submission
export const submitContactForm = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json({
      message: "Form submitted successfully!",
      data: newContact, // ✅ Returns saved data including timestamp
    });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
};
