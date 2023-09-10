"use client"
import SummaryCard from "../cards/SummaryCard";
import {useEffect, useState } from "react";


const SyncBanner  = ({gmail}:any)=>{    

    const [lastSyncedDate, setLastSyncedDate] = useState<string | null>(null);
    
    const link = {
        imgURL : '/assets/banners/sync-banner-2.svg',
        label : "Sync Banner"
    }

    const updateLastSyncedDate = (lastSyncedDate:string)=>{
        setLastSyncedDate(lastSyncedDate);
    }

    useEffect(()=>{
        const lastSyncedDate = localStorage.getItem("lastSyncedDate");
        setLastSyncedDate(lastSyncedDate);
    },[])

    
    
    return(
        <div>
            <section className="flex flex-col justify-center rounded-lg overflow-hidden bg-gradient-to-tl from-violet-500 to-fuchsia-500">
                <div className="w-full max-w-screen-lg">
                    <img
                        src={link.imgURL}
                        alt={link.label}
                        className="w-full h-auto lg:-mb-7 "
                    />
                </div>
                <div className={`flex flex-col items-center justify-center w-full mb-1.5`}>
                    <h1 className="font-mono text-light-2 text-subtle-meidum lg:text-body-medium overflow-hidden ">Last Synced:{lastSyncedDate}</h1>
                    <button disabled={true} className="hidden bg-glassmorphism text-body-bold text-light-2 rounded-full py-2 px-4 flex items-center justify-center hover:bg-amber-500 disabled:bg-amber-500 transition duration-300 ">
                        <svg className={`animate-spin w-5 h-5 mr-2`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                        </svg>
                    </button>


                </div>

                
            </section>

             <SummaryCard gmail={gmail} updateLastSyncedDate={updateLastSyncedDate}></SummaryCard>
        </div>
        
    )
}

export default SyncBanner;