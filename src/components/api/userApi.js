import axiosInstance from "./axiosConfig";

// Fetch user data from the API
export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data; // Assuming the API returns a data object
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Example: Login API call
export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
