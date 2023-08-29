"use server"
import axios from "axios";
import dayjs from "dayjs";

export async function fetchAccessToken(userId:string):Promise<any> {
  const CLERK_URL = `https://api.clerk.dev/v1/users/${userId}/oauth_access_tokens/oauth_google`;
  const response = await fetch(CLERK_URL,
    {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    }
  )
  const data = await response.json();
  return data
}


export async function fetchStepsFromGoogle(accessToken: string): Promise<any> {
    console.log(accessToken);
  const startDate = dayjs("2023-08-01").startOf("day");
  const endDate = dayjs("2023-08-31").endOf("day");

  const requestBody = 
    {
        "aggregateBy": [
            {
            "dataTypeName": "com.google.step_count.delta"
            }
        ],
        "endTimeMillis":1693420200000,
        "startTimeMillis":1690828200000,
        "bucketByTime": {
            "period": {
            "value": 30,
            "type": "day",
            "timeZoneId": "Asia/Colombo"
            }
        }
    }

  try {


    const response = await axios.post(
      `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`, requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        
      }
    );

    const stepsByDay = response.data.bucket.map((bucket:any) => {
      const date = dayjs(bucket.startTimeMillis);
      const stepCount = bucket.dataset[0].point[0].value[0].intVal;
      return { date, stepCount };
    });

    return stepsByDay;
  } catch (error:any) {
    console.error("Error fetching steps:", error.message);
    throw error;
  }
}