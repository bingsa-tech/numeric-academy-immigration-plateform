// backend/seed.js
const db = require("./config/db");
const fs = require("fs");
const path = require("path");

const seedDatabase = async () => {
  try {
    // On force le chemin pour éviter les erreurs de dossier
    const absolutePath = path.join(__dirname, "data", "events.json");
    const fileContent = fs.readFileSync(absolutePath, "utf-8");
    const data = JSON.parse(fileContent);

    console.log("🚀 Début de l'importation...");

    for (const categorieObj of data.evenements_professionnels_canada_2026) {
      const nomCategorie = categorieObj.categorie;

      for (const ev of categorieObj.evenements) {
        const query = `
          INSERT INTO events (nom, event_date, lieu, description, secteurs, lien_officiel, categorie)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
        
        // PostgreSQL accepte les tableaux JS si la colonne est de type TEXT[]
        const values = [
          ev.nom, 
          ev.date, 
          ev.lieu, 
          ev.description, 
          ev.secteurs, // [ "IA", "Robotique" ]
          ev.lien_officiel,
          nomCategorie
        ];

        await db.query(query, values);
        console.log(`✅ Ajouté : ${ev.nom}`);
      }
    }

    console.log("⭐ Migration réussie !");
    process.exit();
  } catch (err) {
    console.error("❌ Erreur critique :", err.message);
    process.exit(1);
  }
};

seedDatabase();