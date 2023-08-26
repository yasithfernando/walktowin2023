import axios from "axios";

export const fetchAccessToken = async ():Promise<string> => {
  try {
    const response = await axios.get(
      `https://api.clerk.dev/v1/users/user_2TiDgEdAsAiSDfRa34fo42JchHa/oauth_access_tokens/oauth_google`,
      {
        headers: {
          Authorization: `Bearer sk_test_FY0nY1O2aj1gSPHleBiFwXA1XMwCf6qA9hTWBoL0wJ`,
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

