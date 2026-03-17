import axios from 'axios';

// 1. On utilise l'URL absolue vers le BACKEND (Port 5555)
const API_URL = 'http://localhost:5555/api/auth';

export default {
  // Méthode de CONNEXION
  async login(credentials) {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error("Erreur Login:", error.response?.data || error.message);
      throw error;
    }
  },

  // Méthode d'INSCRIPTION (Correction des noms de variables)
  async register(userData) {
    try {
      // Utilisation de la bonne variable API_URL
      const response = await axios.post(`${API_URL}/register`, userData, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data; 
    } catch (error) {
      // On capture l'erreur précise du backend (ex: "registration failed")
      console.error("Erreur Register:", error.response?.data || error.message);
      throw error;
    }
  }
};