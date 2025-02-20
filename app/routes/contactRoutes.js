const express = require("express");
const { submitContactForm } = require("../Controllers/contactController");

const router = express.Router();

router.post("/contact", submitContactForm);

module.exports = router;