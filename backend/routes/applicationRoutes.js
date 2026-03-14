const express = require("express")
const router = express.Router()

const {
    createApplication, 
    getApplications, 
    getApplicationsByStudent, 
    deleteApplication, 
    updateApplication,
    calculateScore,
    getRecommendations
} = require("../controllers/applicationController")

// You are extracting the functions here...
const { verifyToken, isAdmin } = require("../middleware/authMiddleware")

// ...so use them directly here without the "authMiddleware." prefix
router.get("/recommendations/:student_id", verifyToken, getRecommendations);
router.post("/", verifyToken, createApplication)
router.get("/", verifyToken, getApplications)
router.get("/student/:id", verifyToken, isAdmin, getApplicationsByStudent) // Added isAdmin for security
router.delete("/:id", verifyToken, deleteApplication)

router.put("/:id/status", verifyToken, isAdmin, updateApplication) 
router.post("/:id/score", verifyToken, isAdmin, calculateScore)


module.exports = router