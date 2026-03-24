import axios from "axios";

const API = "http://localhost:5555/api/applications";

// Helper pour headers
const authHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// Soumettre une candidature
const submitApplication = async (programId, token) => {
  const res = await axios.post(
    API,
    { program_id: programId },
    authHeader(token)
  );
  return res.data;
};

// Récupérer les candidatures
const getApplications = async (token) => {
  const res = await axios.get(API, authHeader(token));
  return res.data;
};

// Calculer le score
const calculateScore = async (applicationId, token) => {
  const res = await axios.post(
    `${API}/${applicationId}/score`,
    {},
    authHeader(token)
  );
  return res.data;
};

// Export unique propre
export default {
  submitApplication,
  getApplications,
  calculateScore
};