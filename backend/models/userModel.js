const pool = require("../config/db")

exports.createUser = async (email, password) => {

return await pool.query(
"INSERT INTO users(email,password_hash) VALUES($1,$2) RETURNING *",
[email,password]
)

}

exports.findUserByEmail = async (email) => {
    // We MUST use 'pool' here because that is what you required at the top
    return await pool.query(
        "SELECT id, email, password_hash, role FROM users WHERE email = $1", 
        [email]
    );
};