const express = require("express");
const router = express.Router();
const { 
    getAllPrograms, 
    getProgramsByUniversity, 
    createProgram 
} = require("../controllers/programController");
const authMiddleware = require("../middleware/authMiddleware");

// Public routes (anyone can see programs)
router.get("/", getAllPrograms);
router.get("/university/:id", getProgramsByUniversity);

// Protected route (Only logged in users/admins can add programs)
router.post("/", authMiddleware.verifyToken, createProgram);

module.exports = router;