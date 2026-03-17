const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const { authenticateToken, isAdmin } = require("../middleware/authMiddleware");

// Route publique : Tout le monde peut voir les news sur la Home
router.get("/", newsController.getAllNews);

// Routes protégées : Seul un admin peut modifier
router.post("/", authenticateToken, isAdmin, newsController.createNews);
router.delete("/:id", authenticateToken, isAdmin, newsController.deleteNews);

module.exports = router;