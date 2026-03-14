const db = require("../config/db")

exports.uploadDocument = async (req,res)=>{

try{

const userId = req.user.id
const { application_id, document_type, file_url } = req.body

const result = await db.query(
`INSERT INTO documents
(application_id, document_type, file_url)
VALUES ($1,$2,$3)
RETURNING *`,
[application_id, document_type, file_url]
)

res.json(result.rows[0])

}catch(err){

console.error("DOCUMENT ERROR :", err.message)
res.status(500).json({error:"Server error", detail: err.message })

}

}

exports.getDocuments = async (req,res)=>{

try{

const result = await db.query(
`SELECT * FROM documents`
)

res.json(result.rows)

}catch(err){

console.error(err)
res.status(500).json({error:"Server error"})

}

}

exports.getDocumentById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query(
            'SELECT * FROM documents WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Document not found." });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};