import axios from 'axios';

export default {
  async getAllNews() {
    const response = await axios.get('http://localhost:5555/api/news');
    return response.data;
  }
};