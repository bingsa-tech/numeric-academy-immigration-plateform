const {spawnSync}=require("child_process")
const db = require("../config/db");


exports.calculateScore = async (req, res) => {
    try {
        const applicationId = req.params.id;

        const result = await db.query(`
            SELECT s.gpa, s.english_test_score
            FROM students s
            JOIN applications a ON s.id = a.student_id
            WHERE a.id=$1
        `, [applicationId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Application not found" });
        }

        const { gpa, english_test_score } = result.rows[0];

        // Appel du script Python
        const python = spawnSync("python3", ["../data-science/scorer.py", gpa, english_test_score]);
        const probability = parseFloat(python.stdout.toString().trim());

        // --- TA LOGIQUE DE RECOMMANDATION ICI ---
        let recommendation;
        if (probability > 0.7) {
            recommendation = "High chance";
        } else if (probability > 0.4) {
            recommendation = "Medium chance";
        } else {
            recommendation = "Low chance";
        }
        // ----------------------------------------

        await db.query(`
            UPDATE applications
            SET admission_score=$1
            WHERE id=$2
        `, [probability, applicationId]);

        // On renvoie la probabilité ET la recommandation
        res.json({
            application_id: applicationId,
            admission_probability: probability,
            recommendation: recommendation // <--- Super utile pour le frontend !
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "server error" });
    }
};
// 1. POST /api/applications - Create a new application
exports.createApplication = async (req, res) => {
    try {
        const userId = req.user.id; 
        const { program_id } = req.body;

        const studentLookup = await db.query(
            'SELECT id FROM students WHERE user_id = $1',
            [userId]
        );

        if (studentLookup.rows.length === 0) {
            return res.status(404).json({ error: "Student profile not found." });
        }

        const studentId = studentLookup.rows[0].id; 

        const result = await db.query(
            `INSERT INTO applications (student_id, program_id, status) 
             VALUES ($1, $2, 'submitted') 
             RETURNING *`,
            [studentId, program_id]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {
        console.error("DATABASE ERROR:", err.message);
        res.status(500).json({ error: "Server error", detail: err.message });
    }
};

// 2. GET /api/applications - Get applications for the logged-in user
exports.getApplications = async (req, res) => {
    try {
        const userId = req.user.id;

        const result = await db.query(
            `SELECT 
                a.id AS application_id, 
                a.status, 
                a.created_at,
                p.name AS program_name, 
                u.name AS university_name
             FROM applications a
             JOIN students s ON a.student_id = s.id
             JOIN programs p ON a.program_id = p.id
             JOIN universities u ON p.university_id = u.id
             WHERE s.user_id = $1
             ORDER BY a.created_at DESC`,
            [userId]
        );

        res.json(result.rows);
    } catch (err) {
        console.error("DATABASE ERROR:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// 3. GET /api/applications/student/:id - Admin/Staff view
exports.getApplicationsByStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const result = await db.query(
            `SELECT * FROM applications WHERE student_id = $1`,
            [studentId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

// 4. DELETE /api/applications/:id - Withdraw an application
exports.deleteApplication = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        const verifyOwnership = await db.query(
            `SELECT a.id FROM applications a
             JOIN students s ON a.student_id = s.id
             WHERE a.id = $1 AND s.user_id = $2`,
            [id, userId]
        );

        if (verifyOwnership.rows.length === 0) {
            return res.status(403).json({ error: "Unauthorized or application not found." });
        }

        await db.query('DELETE FROM applications WHERE id = $1', [id]);
        res.json({ message: "Application successfully withdrawn." });

    } catch (err) {
        console.error("DATABASE ERROR:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// 5. PUT /api/applications/:id/status - Update application status (Admin only)
exports.updateApplication = async (req, res) => {
    try {
        const applicationId = req.params.id;
        const { status } = req.body;

        const result = await db.query(
            `UPDATE applications SET status = $1 WHERE id = $2 RETURNING *`,
            [status, applicationId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Application not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

