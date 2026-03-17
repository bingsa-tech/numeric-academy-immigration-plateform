import axios from "axios";

const API = "http://localhost:5555/api/applications";

export const submitApplication = async (programId, token) => {
  const res = await axios.post(
    API,
    { program_id: programId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const getApplications = async (token) => {
  const res = await axios.get(API, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};
export default {
  // Cette méthode appelle ton endpoint : /api/applications/:id/score
  async calculateScore(applicationId) {
    try {
      const response = await axios.post(`${API}/${applicationId}/score`);
      return response.data; // Le score calculé par ton backend
    } catch (error) {
      console.error("Erreur lors du calcul du score:", error);
      throw error;
    }
  }
};