"use client"
import { fetchStepCounts } from "@/lib/actions/google.actions";
import { fetchAccessToken, syncStepsToBackend } from "@/lib/actions/user.actions";
import { useClerk } from "@clerk/nextjs";
import { use, useEffect, useState } from "react";
import ErrorView from "../notifications/ErrorView";

const SyncButton = ({updateLastSyncedDate, updateSummary}:any) => {
    const [isSyncing, setIsSyncing] = useState(false);
    const [syncError, setSyncError] = useState(false);

    const userId = useClerk().user?.id as string;
    const gmail = useClerk().user?.emailAddresses[0].emailAddress as string;
    
    const syncSteps = async () => {
        setIsSyncing(true);
        setSyncError(false);

    try {
        const accessToken = await fetchAccessToken(userId);
        const stepCounts = await fetchStepCounts(accessToken);
        console.log(stepCounts);
        
        const syncResponse = await syncStepsToBackend(stepCounts.result, gmail);
        console.log(syncResponse);

        setIsSyncing(false);
        setSyncError(false);
        updateLastSyncedDate(new Date().toLocaleString());
        // updateSummary(
        //     {
        //         totalSteps: syncResponse.totalSteps,
        //         totalPoints: syncResponse.totalPoints,
        //     }
        // );
    } catch (error) {
        console.error(error);
        setIsSyncing(false);
        setSyncError(true);
    }
    }


    return (
        <div className="flex flex-col w-full justify-center items-center">
            <button onClick={syncSteps} className={`flex justify-center items-center bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-light-1 text-heading3-bold w-4/5 h-14 rounded-2xl mt-4 ${isSyncing && 'bg-amber-500 '}`}>
                <svg className={`animate-spin w-7 h-7 mr-2 ${!isSyncing && 'hidden'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
                {isSyncing ? 'SYNCING...' : 'SYNC STEPS'}
            </button>
            {syncError ? <ErrorView errorMessage="Sync Failed! Please try again later."></ErrorView>: ''}
        </div>
        
    )

}

export default SyncButton;