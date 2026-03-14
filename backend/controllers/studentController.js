const db = require("../config/db")

exports.createProfile = async (req, res) => {

try {

const userId = req.user.id

const {
first_name,
last_name,
country,
education_level,
gpa,
english_test_score
} = req.body

const result = await db.query(
`INSERT INTO students
(user_id, first_name, last_name, country, education_level, gpa, english_test_score)
VALUES ($1,$2,$3,$4,$5,$6,$7)
RETURNING *`,
[userId, first_name, last_name, country, education_level, gpa, english_test_score]
)

res.json(result.rows[0])

} catch (err) {
console.error(err)
res.status(500).json({error:"Server error"})
}

}
// Get student profile
exports.getProfile = async (req, res) => {

try {

const userId = req.user.id

const result = await db.query(
`SELECT * FROM students WHERE user_id=$1`,
[userId]
)

res.json(result.rows[0])

} catch (err) {
console.error(err)
res.status(500).json({error:"Server error"})
}

}