require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5555; // Utilise le .env ou 5555 par défaut

// 🔥 CONFIGURATION DES ROUTES
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const studentRoutes = require("./routes/studentRoutes");
const programRoutes = require("./routes/programRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const documentRoutes = require("./routes/documentRoutes");
const universityRoutes = require("./routes/universityRoutes");
const eventsRoutes = require("./routes/eventsRoutes");

// 🔥 MIDDLEWARES
// Modification ici : on autorise le port 5173 (Vue) et 3001
const allowedOrigins = ["http://localhost:5173", "http://localhost:3001"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

// 🔥 API ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes); // Changé de "/api" à "/api/profile" pour éviter les conflits
app.use("/api/students", studentRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/universities", universityRoutes);
app.use("/api/events", eventsRoutes); // Verifie que ton router ne répète pas /events

app.get("/", (req, res) => {
  res.send("🚀 EduMigrate API is running...");
});

// 🔥 START SERVER
app.listen(PORT, "0.0.0.0", () => {
  console.log("-----------------------------------------");
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📅 Events API: http://localhost:${PORT}/api/events`);
});