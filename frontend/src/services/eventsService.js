import axios from "axios";

const API = "http://localhost:5555/api/events";

export const getEvents = async () => {
  const res = await axios.get(API);
  return res.data;
};

/* export const getRecommendedEvents = async (studentId, token) => {
  const res = await axios.get(`${API}/recommend/${studentId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}; */


