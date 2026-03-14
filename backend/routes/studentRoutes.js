const express = require("express");
const router = express.Router();

// Use {} to pull specific functions out of the controller
const { createProfile, getProfile } = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");



// ----------------------
// Now use the function names directly
router.post("/profile", authMiddleware.verifyToken, createProfile);
router.get("/profile", authMiddleware.verifyToken, getProfile);

module.exports = router;