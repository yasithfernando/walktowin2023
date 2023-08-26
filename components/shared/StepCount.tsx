"use client"
import { fetchAccessToken } from '@/services/clerk-service';
import { fetchStepCounts } from '@/services/google-fit-service';
import { useAuth, useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

function StepCount() {
  const user = useUser();
  const auth = useAuth();
  const [stepCounts, setStepCounts] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  

  useEffect(() => {

    console.log(user);
    console.log(auth);
    
    const fetchStepCountsData = async () => {
      const at = "accessToken";
      const startTimestamp = 1690791600000/* your start timestamp */;
      const endTimestamp = 1693506600000/* your end timestamp */;

      try {
        const stepCountData = await fetchStepCounts(startTimestamp, endTimestamp, at);
        setStepCounts(stepCountData);
        //console.log(stepCountData);
      } catch (error) {
        console.error('Error fetching step counts:', error);
      }
    };

    //fetchStepCountsData();
  }, []);

  return (
    // Your component JSX
    <div>Step Synced</div>
  );
}



export default StepCount;