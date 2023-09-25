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
    console.log(`gmail: ${gmail} \ntoken: ${tokens?.access_token}`)
    return tokens;
}

