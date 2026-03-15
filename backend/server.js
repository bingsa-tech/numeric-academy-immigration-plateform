require("dotenv").config()

const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const profileRoutes = require("./routes/profileRoutes")
const studentRoutes = require("./routes/studentRoutes")
const programRoutes = require("./routes/programRoutes") 
const applicationRoutes = require("./routes/applicationRoutes")
const documentRoutes = require("./routes/documentRoutes")   
const universityRoutes = require("./routes/universityRoutes")
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/universities", universityRoutes)
app.use("/api/auth", authRoutes)
app.use("/api", profileRoutes)
app.use("/api/students", studentRoutes)
app.use("/api/programs", programRoutes) 
app.use("/api/applications", applicationRoutes)
app.use("/api/documents", documentRoutes) 

app.listen(process.env.PORT, () => {
 console.log("Server running on port " + process.env.PORT)
})