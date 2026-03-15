const express = require("express");
const router = express.Router();
const {
    getAllUniversities,
    getUniversityById,
    createUniversity,
    updateUniversity,
    deleteUniversity    
} = require("../controllers/universityController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/", getAllUniversities);
router.get("/:id", getUniversityById);
router.post("/", verifyToken, isAdmin, createUniversity);
router.put("/:id", verifyToken, isAdmin, updateUniversity);
router.delete("/:id", verifyToken, isAdmin, deleteUniversity);
module.exports = router;