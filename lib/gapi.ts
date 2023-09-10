"use server"
import { google } from "googleapis";
import { mapUserToInstance } from "./actions/user.actions";

const CLIENT_ID_1 = process.env.GOOGLE_CLIENT_ID_1;
const CLIENT_SECRET_1 = process.env.GOOGLE_CLIENT_SECRET_1;
const CLIENT_ID_2 = process.env.GOOGLE_CLIENT_ID_2;
const CLIENT_SECRET_2 = process.env.GOOGLE_CLIENT_SECRET_2;
const REDIRECT_URI = process.env.REDIRECT_URI; // Replace with your redirect URI

export async function getOAuthClient(gmail:string) {
  const instance =await mapUserToInstance(gmail);
  if (instance === 1) {
    return new google.auth.OAuth2(CLIENT_ID_1, CLIENT_SECRET_1, REDIRECT_URI);
  } else if (instance === 2) {
    return new google.auth.OAuth2(CLIENT_ID_2, CLIENT_SECRET_2, REDIRECT_URI);
  } else {
    throw new Error("Invalid instance number");
  }
}

export async function getAuthUrl(gmail: string) {
    const oAuth2Client = await getOAuthClient(gmail);
    
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "online",
        scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/fitness.activity.read",
        ],
    });
    
    return authUrl;
}

export async function getAccessToken(gmail: string, code: string) {
    const oAuth2Client = await getOAuthClient(gmail);

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    return tokens;
}


export async function refreshAccessToken(refreshToken: string, gmail: string) {
  const oAuth2Client = await getOAuthClient(gmail);

  // Set the refresh token on the client
  oAuth2Client.setCredentials({ refresh_token: refreshToken });

  try {
    // Request a new access token using the refresh token
    const response = await oAuth2Client.refreshAccessToken().then((res) => {
      console.log("res", res);
      return res;
    });

    // The new access token is in tokens.access_token
    //const newAccessToken = tokens.access_token;

    // Optionally, you can also receive a new refresh token, but it might remain the same
    //const newRefreshToken = tokens.refresh_token;

    // Store the new access token (and possibly the new refresh token) securely
    // for future use, replacing the old ones
    // ...

    //return newAccessToken;
    return response;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
}

