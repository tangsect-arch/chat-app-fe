import axios from "axios";

const API_URL = "https://api.example.com"; // Replace with your API URL

const apiService = {
  getData: async () => {
    try {
      const response = await axios.get(`${API_URL}/data`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postData: async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deeteData: async (data) => {
    try {
      const response = await axios.delete(`${API_URL}/data`, data);
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  },
};

export default apiService;
