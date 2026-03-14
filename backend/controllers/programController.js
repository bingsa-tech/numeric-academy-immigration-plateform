const db = require("../config/db");

// 1. GET /programs - Get all programs with university details
exports.getAllPrograms = async (req, res) => {
    try {
        const result = await db.query(
            `SELECT p.*, u.name AS university_name, u.country 
             FROM programs p
             JOIN universities u ON p.university_id = u.id
             ORDER BY p.name ASC`
        );
        res.json(result.rows);
    } catch (err) {
        console.error("DB Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// 2. GET /programs/university/:id - Get programs for a specific university
exports.getProgramsByUniversity = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query(
            `SELECT * FROM programs WHERE university_id = $1`,
            [id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "No programs found for this university." });
        }
        
        res.json(result.rows);
    } catch (err) {
        console.error("DB Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// 3. POST /programs - Create a new program
exports.createProgram = async (req, res) => {
    try {
        const { university_id, name, degree_level, tuition_fee } = req.body;

        const result = await db.query(
            `INSERT INTO programs (university_id, name, degree_level, tuition_fee) 
             VALUES ($1, $2, $3, $4) 
             RETURNING *`,
            [university_id, name, degree_level, tuition_fee]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("DB Error:", err.message);
        // If university_id doesn't exist, Postgres will throw a foreign key error
        if (err.code === '23503') {
            return res.status(400).json({ error: "Invalid university_id. University does not exist." });
        }
        res.status(500).json({ error: "Server error" });
    }
};