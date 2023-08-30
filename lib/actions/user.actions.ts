"use server"
import { apiURLs } from "@/constants";
import axios from "axios";


//function tro fetch user,teams,all players from xwb.superglu.clud/api/v1/user using axios add gmail to header and use promise all
export async function fetchAll():Promise<any> {
  console.log("fetching data")

  //const currentLoggedUser = await currentUser();
  //const loggedInEmail = currentLoggedUser?.emailAddresses[0].emailAddress;
  
  try{

    const [teamsResponse, femalePlayersResponse, malePlayersResponse, allPlayersResponse] = await Promise.all([
    axios.get(apiURLs.getTeams),
    axios.get(apiURLs.getFemalePlayers),
    axios.get(apiURLs.getMalePlayers),
    axios.get(apiURLs.getAllPlayers)
  ]);  
    const teams = teamsResponse.data;
    const femalePlayers = femalePlayersResponse.data;
    const malePlayers = malePlayersResponse.data;
    const allPlayers = allPlayersResponse.data;


    return {teams, femalePlayers, malePlayers, allPlayers};


  }catch(error:any){
    console.error('Error fetching data:', error.message);
    throw error;
  }

}

export async function fetchAccessToken(userId:string){
  const CLERK_URL = `https://api.clerk.dev/v1/users/${userId}/oauth_access_tokens/oauth_google`;
  try {
    const response = await fetch(CLERK_URL,
      {
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      }
    )
    const data = await response.json();
    return data[0].token;

  } catch (error) {
    return error;
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