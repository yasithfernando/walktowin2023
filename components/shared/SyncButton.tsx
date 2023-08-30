"use client"
import { fetchStepCounts } from "@/lib/actions/google.actions";
import { fetchAccessToken, syncStepsToBackend } from "@/lib/actions/user.actions";
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";

const SyncButton = () => {
    const [isSyncing, setIsSyncing] = useState(false);

    const userId = useClerk().user?.id as string;
    const gmail = useClerk().user?.emailAddresses[0].emailAddress as string;

    
    const syncSteps = async () => {
        setIsSyncing(true);
        try {
            await fetchAccessToken(userId).then((accessToken) => {
                fetchStepCounts(accessToken).then((data) => {
                        console.log(data);
                        syncStepsToBackend(data.result,gmail).then((res:any)=>{
                            const response = res;
                            console.log(response);
                            setIsSyncing(false);
                        });
                })
            });

            console.log(isSyncing)

            //const data = await fetchStepCounts(accessToken);
        } catch (error) {
            console.log(error)
        }finally{
            //setIsSyncing(false);
            console.log(isSyncing);
        }
    }


    return (
        <button onClick={syncSteps} className={`flex justify-center items-center bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-light-1 text-heading3-bold w-4/5 h-14 rounded-2xl mt-4 ${isSyncing && 'bg-amber-500 '}`}>
                <svg className={`animate-spin w-7 h-7 mr-2 ${!isSyncing && 'hidden'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
                {isSyncing ? 'SYNCING...' : 'SYNC STEPS'}
            </button>
    )

}

export default SyncButton;