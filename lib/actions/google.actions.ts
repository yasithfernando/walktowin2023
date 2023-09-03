"use server"

// services/api.ts

import { competitionDetails } from "@/constants";
import axios from "axios";

const BASE_URL = "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate";

const startTime = competitionDetails.startDate;
const endTime = competitionDetails.endDate;

//Refer google fit api documentation for more details
const requestBodytoFilterUserInput = {
  aggregateBy: [
    {
      dataTypeName: "com.google.step_count.delta",
    },
  ],
  endTimeMillis: endTime,
  startTimeMillis: startTime,
};

export const fetchStepCounts = async (accessToken: string) => {
  try {
    console.log(accessToken)
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBodytoFilterUserInput),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error.message);
    }

    const data = await response.json();

    // Add all steps and reject manually added data
    const result = bucketStepsByDate(data);

    return result;
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    // Re-throw the error for the caller to handle
    throw error;
  }
};


//Bucket steps by date
const bucketStepsByDate = (data: any) => {
  const filteredData: { [date: string]: number } = {};

  const points = data.bucket[0].dataset[0].point;
  let totalSteps = 0;

  for (const point of points) {
    if (!point.originDataSourceId.includes("user_input")) {
      const startTimeNanos = parseInt(point.startTimeNanos);
      const date = new Date(startTimeNanos / 1000000); // Convert nanoseconds to milliseconds

      // Convert the date to the "Asia/Colombo" timezone
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Colombo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      const dateFormatter = new Intl.DateTimeFormat("fr-CA", options);
      const dateString = dateFormatter.format(date);



      if (!filteredData[dateString]) {
        filteredData[dateString] = 0;
      }

      filteredData[dateString] += point.value[0].intVal;
      totalSteps += point.value[0].intVal;
    }
  }

  const result = Object.keys(filteredData).map((dateString) => ({
    date: dateString,
    steps: filteredData[dateString],
  }));

  const dataToReturn = {totalSteps,result}

  return dataToReturn;
}