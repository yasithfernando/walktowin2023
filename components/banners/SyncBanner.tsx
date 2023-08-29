"use client"
import Image from "next/image";
import StepCount from "../shared/StepCount";
import { clerkClient, useClerk } from "@clerk/nextjs";
import { fetchAccessToken, fetchStepsFromGoogle } from "@/lib/actions/user.actions";
import { useState } from "react";

function SyncBanner(){
    const[loading, setLoading] = useState(false);

    const[accessToken, setAccessToken] = useState('');

    const link = {
        imgURL : '/assets/banners/sync-banner-2.svg',
        label : "Sync Banner"
    }
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const userId = useClerk().user?.id as string;

    const syncSteps = () => {

        setLoading(true);
        try{
        fetchAccessToken(userId).then((data) => {
            console.log(data);
            setLoading(false);
            setAccessToken(data[0].token);

        });
        }
        catch(err){
            console.log(err);
        }
        
        
    }

    const testSync = () => {
        fetchStepsFromGoogle(accessToken).then((data) => {
            console.log(data);
        })
    }
    
    return(
        <section className="flex flex-col justify-center rounded-lg overflow-hidden bg-gradient-to-tl from-violet-500 to-fuchsia-500">
            <div className="w-full max-w-screen-lg">
                <img
                    src={link.imgURL}
                    alt={link.label}
                    className="w-full h-auto -mb-8"
                />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-28 gap-2 mb-2 max-xl:h-20">
                <h1 className="font-mono text-light-2 text-body-medium overflow-hidden">Last Synced: {currentMonth} {currentDay}th</h1>
                <button disabled={loading} onClick={syncSteps} className="bg-glassmorphism text-body-bold text-light-2 rounded-full py-2 px-4 flex items-center justify-center hover:bg-amber-500 disabled:bg-amber-500 transition duration-300 ">
                    <svg className={`animate-spin w-5 h-5 mr-2 ${!loading && 'hidden'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                    </svg>
                    {loading ? "Syncing..." : "Sync Steps"}
                </button>

                <button onClick={testSync} className="bg-dark-1 text-light-2">TEST STEPS SYNC</button>

            </div>

        </section>
        
    )
}

export default SyncBanner;