import axios from "axios";

// Create an instance of Axios with a base URL
const axiosInstance = axios.create({
  baseURL: "http:localhost:5000",
  timeout: 10000, // Request timeout (optional)
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
