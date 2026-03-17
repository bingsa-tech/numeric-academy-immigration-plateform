const db = require("../config/db");

// 1. Récupérer toutes les actualités (Pour la Home Page)
exports.getAllNews = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM news ORDER BY created_at DESC"
        );
        res.json(result.rows);
    } catch (err) {
        console.error("Erreur GET NEWS:", err.message);
        res.status(500).json({ error: "Erreur lors de la récupération des actualités" });
    }
};

// 2. Créer une nouvelle actualité (Espace Admin uniquement)
exports.createNews = async (req, res) => {
    try {
        const { title, content, category, color_theme } = req.body;

        // Validation simple
        if (!title || !content) {
            return res.status(400).json({ error: "Le titre et le contenu sont requis" });
        }

        const result = await db.query(
            `INSERT INTO news (title, content, category, color_theme) 
             VALUES ($1, $2, $3, $4) 
             RETURNING *`,
            [title, content, category || 'loi', color_theme || 'blue']
        );

        res.status(201).json({
            message: "Actualité publiée avec succès",
            news: result.rows[0]
        });
    } catch (err) {
        console.error("Erreur CREATE NEWS:", err.message);
        res.status(500).json({ error: "Erreur serveur lors de la publication" });
    }
};

// 3. Supprimer une actualité (Espace Admin)
exports.deleteNews = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query("DELETE FROM news WHERE id = $1 RETURNING *", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Actualité non trouvée" });
        }

        res.json({ message: "Actualité supprimée avec succès" });
    } catch (err) {
        console.error("Erreur DELETE NEWS:", err.message);
        res.status(500).json({ error: "Erreur serveur" });
    }
};