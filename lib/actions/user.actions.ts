"use server"
import { apiURLs } from "@/constants";
import axios from "axios";
import clerk from "@clerk/clerk-sdk-node";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

//function to fetch user
export async function fetchUser(gmail:string){
  console.log("fetching user")
  try{
    const response = await axios.get(apiURLs.getUser, {
      headers: {
        gmail: gmail
      },
    });
    const user = response.data;
    return user;
  }catch(error:any){
    console.error('Error fetching user:', error.message);
    throw error;
  }
}


//function tro fetch user,teams,all players from xwb.superglu.clud/api/v1/user using axios add gmail to header and use promise all
export async function fetchAll():Promise<any> {
  console.log("fetching data")  
  try{

    const [teamsResponse, allPlayersResponse] = await Promise.all([
    axios.get(apiURLs.getTeams),
    axios.get(apiURLs.getAllPlayers)
  ]);  
    const updatedTeams = teamsResponse.data;

    const updatedAllPlayers = allPlayersResponse.data;

    return {
      updatedTeams,
      updatedAllPlayers
    }

  }catch(error:any){
    console.error('Error fetching data:', error.message);
    throw error;
  }

}

export async function fetchAccessToken(){
  try {
    const { userId } = auth();
    const [OauthAccessToken] = await clerk.users.getUserOauthAccessToken(
      userId || "",
      "oauth_google"
    );
    const { token } = OauthAccessToken;
    console.log("token", token)
    return token;
  } catch (error:any) {
    throw new Error(error.message);
    
  }
}


//Sync Steps to backend
export async function syncStepsToBackend(stepCounts: any, gmail: string){

  const requestBody = {
    stepCounts: stepCounts,
  }
    const response = await axios.post(apiURLs.syncSteps, requestBody, {
      headers: {
        gmail: gmail
      },
    }).catch((error) => {
      console.error("Error syncing steps to backend:", error);
      throw new Error("Error syncing steps to backend");
    })

    return response.data;
}