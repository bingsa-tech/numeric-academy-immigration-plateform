const db = require("../config/db");

// ✅ GET ALL
const getAllEvents = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM events ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ GET BY ID
const getEventById = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM events WHERE id = $1",
      [req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ CREATE
const createEvent = async (req, res) => {
  const { name, description, date, location, category, sectors, official_link } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO events (name, description, date, location, category, sectors, official_link)
       VALUES ($1,$2,$3,$4,$5,$6,$7)
       RETURNING *`,
      [name, description, date, location, category, sectors, official_link]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Insertion error" });
  }
};

// ✅ RECOMMANDATION
const getRecommendByStudent = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await db.query(
      "SELECT * FROM students WHERE id = $1",
      [studentId]
    );

    if (!student.rows.length) {
      return res.status(404).json({ error: "Student not found" });
    }

    const profile = student.rows[0];

    const keyword = profile.education_level
      ? profile.education_level.toLowerCase()
      : "";

    const events = await db.query(
      `SELECT * FROM events 
       WHERE EXISTS (
         SELECT 1 FROM unnest(sectors) s 
         WHERE LOWER(s) LIKE $1
       )
       LIMIT 6`,
      [`%${keyword}%`]
    );

    res.json(events.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Recommendation error" });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  getRecommendByStudent
};