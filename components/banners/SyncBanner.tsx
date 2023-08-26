"use client"
import Image from "next/image";
import StepCount from "../shared/StepCount";
import { fetchAccessToken } from "@/services/clerk-service";

function SyncBanner(){
    const link = {
        imgURL : '/assets/banners/sync-banner-2.svg',
        label : "Sync Banner"
    }
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    const syncSteps = () => {
        console.log("Sync Steps");
        fetchAccessToken();
    }
    return(
        <section className="flex flex-col justify-center rounded-lg overflow-hidden bg-primary-500">
            <div className="w-full max-w-screen-lg">
                <img
                    src={link.imgURL}
                    alt={link.label}
                    className="w-full h-auto -mb-8"
                />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-28 gap-2 mb-2">
                <h1 className="text-light-2 text-body-medium overflow-hidden">Last Synced: {currentMonth} {currentDay}th</h1>
                <button onClick={syncSteps} className="bg-glassmorphism text-body-bold text-light-2 rounded-full py-2 px-4 flex items-center justify-center hover:bg-amber-500 transition duration-300">
                    Sync Steps
                </button>
            </div>


            <StepCount/>
        </section>
        
    )
}

export default SyncBanner;