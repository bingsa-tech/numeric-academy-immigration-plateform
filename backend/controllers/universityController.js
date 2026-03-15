const db = require("../config/db");

/**
 * GET /api/universities
 * Supports searching by country via query params: /api/universities?country=Canada
 */
exports.getAllUniversities = async (req, res) => {
    try {
        const { country } = req.query;
        let query = "SELECT * FROM universities";
        let params = [];

        if (country) {
            query += " WHERE country ILIKE $1";
            params.push(`%${country}%`);
        }

        // Sort by ranking (Top universities first)
        query += " ORDER BY ranking ASC NULLS LAST";

        const result = await db.query(query, params);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Error in getAllUniversities:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

/**
 * GET /api/universities/:id
 */
exports.getUniversityById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query("SELECT * FROM universities WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "University not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error("Error in getUniversityById:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

/**
 * POST /api/universities
 * Restricted to Admins via middleware
 */
exports.createUniversity = async (req, res) => {
    const { name, country, city, ranking, description, website } = req.body;

    // Simple validation for required fields
    if (!name || !country) {
        return res.status(400).json({ error: "Name and country are required" });
    }

    try {
        const result = await db.query(
            `INSERT INTO universities (name, country, city, ranking, description, website) 
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [name, country, city, ranking, description, website]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Error in createUniversity:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

/**
 * PUT /api/universities/:id
 * Restricted to Admins
 */
exports.updateUniversity = async (req, res) => {
    const { id } = req.params;
    const { name, country, city, ranking, description, website } = req.body;

    try {
        const result = await db.query(
            `UPDATE universities 
             SET name = $1, country = $2, city = $3, ranking = $4, description = $5, website = $6 
             WHERE id = $7 RETURNING *`,
            [name, country, city, ranking, description, website, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "University not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error("Error in updateUniversity:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

/**
 * DELETE /api/universities/:id
 * Restricted to Admins
 */
exports.deleteUniversity = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query("DELETE FROM universities WHERE id = $1 RETURNING *", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "University not found" });
        }

        res.status(200).json({ message: "University deleted successfully" });
    } catch (err) {
        console.error("Error in deleteUniversity:", err.message);
        // Handle Foreign Key constraint if programs are still linked to this university
        if (err.code === '23503') {
            return res.status(400).json({ error: "Cannot delete university while linked programs exist" });
        }
        res.status(500).json({ error: "Internal server error" });
    }
};