require("dotenv").config()

const express = require("express")
const cors = require("cors")
const PORT =5555
const authRoutes = require("./routes/authRoutes")
const profileRoutes = require("./routes/profileRoutes")
const studentRoutes = require("./routes/studentRoutes")
const programRoutes = require("./routes/programRoutes") 
const applicationRoutes = require("./routes/applicationRoutes")
const documentRoutes = require("./routes/documentRoutes")   
const universityRoutes = require("./routes/universityRoutes")
const newsRoutes = require("./routes/newsRoutes")
const app = express()

app.use(cors({origin: 'http://localhost:3001', 
  //methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //credentials: true
}));
app.use(express.json())
app.use("/api/universities", universityRoutes)
app.use("/api/auth", authRoutes)
app.use("/api", profileRoutes)
app.use("/api/students", studentRoutes)
app.use("/api/programs", programRoutes) 
app.use("/api/applications", applicationRoutes)
app.use("/api/documents", documentRoutes) 
app.use("/api/news", newsRoutes)

app.listen(PORT, '0.0.0.0', () => {
    console.log(`-----------------------------------------`);
    console.log(`Server is running on: http://127.0.0.1:${PORT}`);
    console.log(`Auth endpoint ready at: http://127.0.0.1:${PORT}/api/auth/login`);
})