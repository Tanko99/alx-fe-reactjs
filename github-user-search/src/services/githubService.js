import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  
  } catch (error) {
    throw error; 
  }
};

export default fetchUserData;