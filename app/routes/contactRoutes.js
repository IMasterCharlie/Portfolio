import express from "express";
import { submitContactForm } from "../Controllers/contactController.js"; // ✅ Ensure '.js' extension

const router = express.Router();

router.post("/contact", submitContactForm);

export default router; // ✅ Use `export default`
