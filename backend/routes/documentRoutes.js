const express = require("express");
const router = express.Router();

// Add getDocuments inside the curly braces here:
const { uploadDocument, getDocuments, getDocumentById } = require("../controllers/documentController");
const authMiddleware = require("../middleware/authMiddleware");

// Your logs will now show 'function' for both
console.log("CHECKING IMPORTS:");
console.log("uploadDocument type:", typeof uploadDocument);
console.log("getDocuments type:", typeof getDocuments);

router.post("/", authMiddleware.verifyToken, uploadDocument);
router.get("/", authMiddleware.verifyToken, getDocuments);
router.get("/:id", authMiddleware.verifyToken, getDocumentById);    

module.exports = router;