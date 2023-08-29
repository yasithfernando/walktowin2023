import axios from "axios";

const access_token = 'sk_test_FY0nY1O2aj1gSPHleBiFwXA1XMwCf6qA9hTWBoL0wJ';
export const fetchAccessToken = async ():Promise<string> => {
  try {
    const response = await axios.get(
      `http://localhost:3005/api/`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const data = response.data;
    const retrievedAccessToken = data.access_token;
    console.log(data);
    return retrievedAccessToken;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

