// services/api.ts

import axios from "axios";

const BASE_URL = "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate";
  
const test_access_token = `ya29.a0AfB_byAAnieH5vLlxSa9IVXMSoI1C7uvvrEN1QEapHt0UUB3Ktdqlr4q7hg3bAhFystGYuAZt4J9bmeY6xTdC7VfIrv2MIVqDdyUmLraYM8TeUq3DBOwNtkVtCYyPfBUXg1LGkdYLW8QaPAY970mWYRhXpBvcPEq4niYE3GkaCgYKAf0SARASFQHsvYls0eC-js6kfo0ypcwx225QFA0175`;



export const fetchStepCounts = async (
  start: number,
  end: number,
  accessToken: string
) => {

  const requestBody = {
    aggregateBy: [
      {
        dataTypeName: "com.google.step_count.delta",
        dataSourceId:
          "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
      },
    ],
    bucketByTime: { durationMillis: 86400000 }, // 1 day in milliseconds
    start,
    end,
  };

  try {
    const response = await axios.post(BASE_URL, requestBody, {
      headers: {
        Authorization: `Bearer ${test_access_token}`,
        "Content-Type": "application/json",
      },
    });

    // Axios automatically checks for response.ok
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching step counts:", error);
    throw new Error("Error fetching step counts");
  }
};
