import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const fetchUserData = async (username, location, repoCount) => {
  try {
    let query = "";

    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (repoCount) query += `+repos:>${repoCount}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: {
          Authorization: token ? `token ${token}` : undefined,
        },
      }
    );

    // Get detailed user info (optional enhancement)
    const userDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const detailRes = await axios.get(user.url, {
          headers: {
            Authorization: token ? `token ${token}` : undefined,
          },
        });
        return detailRes.data;
      })
    );

    return userDetails;
  } catch (error) {
    throw error;
  }
};

export default fetchUserData;