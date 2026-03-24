const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  getEventById,
  createEvent,
  getRecommendByStudent
} = require("../controllers/eventController");

const authMiddleware = require("../middleware/authMiddleware");

// 🔥 IMPORTANT : routes spécifiques AVANT /:id
router.get("/recommend/:studentId", authMiddleware.verifyToken, getRecommendByStudent);

router.get("/", getAllEvents);
router.get("/:id", authMiddleware.verifyToken, getEventById);

router.post("/", authMiddleware.verifyToken, createEvent);

module.exports = router; 