import axios from "axios";

const API = "http://localhost:5555/api/programs";

export const getPrograms = async () => {
  const res = await axios.get(API);
  return res.data;
};