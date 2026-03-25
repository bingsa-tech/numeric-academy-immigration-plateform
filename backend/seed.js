// backend/seed.js
require('dotenv').config();
const db = require("./config/db");
const fs = require("fs");
const path = require("path");

const seedDatabase = async () => {
  try {
    const absolutePath = path.join(__dirname, "data", "events.json");
    const fileContent = fs.readFileSync(absolutePath, "utf-8");
    const data = JSON.parse(fileContent);

    console.log("🚀 Début de l'importation...");

    for (const categorieObj of data.evenements_professionnels_canada_2026) {
      const category = categorieObj.categorie;

      for (const ev of categorieObj.evenements) {
        const query = `
          INSERT INTO events (
            name,
            description,
            date,
            location,
            category,
            sectors,
            official_link
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

        const values = [
          ev.nom,
          ev.description,
          ev.date,
          ev.lieu,
          category,
          ev.secteurs, // TEXT[]
          ev.lien_officiel
        ];

        await db.query(query, values);
        console.log(`✅ Ajouté : ${ev.nom}`);
      }
    }

    console.log("⭐ Migration réussie !");
    process.exit();
    console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
  } catch (err) {
    console.error("❌ Erreur critique :", err);
    process.exit(1);
  }
};

seedDatabase();