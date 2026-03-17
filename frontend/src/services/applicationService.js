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