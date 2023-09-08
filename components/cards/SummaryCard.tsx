"use client"
import Image from "next/image";
import ErrorView from "../notifications/ErrorView";
import SummaryLoading from "../loading-skeletons/SummaryLoading";
import { useCompetition, useUser } from "@/context/context";
import { useState } from "react";
import { fetchAccessToken, syncStepsToBackend } from "@/lib/actions/user.actions";
import { fetchStepCounts } from '@/lib/actions/google.actions';


interface Props {
  stepsForChart: number[]; // Assuming you pass an array of step data
  steps: number;
}

const SummaryCard = ({ gmail, updateLastSyncedDate} : any) => {

    const [player, setPlayer] = useState<any>({
        points: 0,
        steps: 0,
    });
    const {user, isLoading, isError} = useUser(gmail);
    const {allPlayers,isAllPlayersLoading,isErrorInAllPlayers} = useCompetition();

    const [isSyncing, setIsSyncing] = useState(false);
    const [syncError, setSyncError] = useState(false);


    if(isLoading || isAllPlayersLoading)return <SummaryLoading></SummaryLoading>

    if(isError || isErrorInAllPlayers) return <div className="text-light-2 text-body-bold">Error...</div>

    if(user.error){
        return (<ErrorView errorMessage={user.message}></ErrorView>
        )
    }

    const points = user?.points;
    const steps = user?.steps;
    let rank = 0;

    const numberOfPlayers = allPlayers?.length;

    const index = allPlayers?.findIndex(
        (player:any)=>{
            return (player.steps === user?.steps && player.points === user?.points)
        })

        if(index !== undefined){
            rank = index+1;
        }

    const syncSteps = async () => {
        setIsSyncing(true);
        setSyncError(false);

        try {
            const accessToken = await fetchAccessToken();
            const stepCounts = await fetchStepCounts(accessToken);
            console.log(stepCounts)
            const syncResponse = await syncStepsToBackend(stepCounts.result, gmail);
            console.log(syncResponse);

            setIsSyncing(false);
            setSyncError(false);
            updateLastSyncedDate(new Date().toLocaleString());
            setPlayer({
                points: syncResponse.totalPoints,
                steps: syncResponse.totalSteps,
            })
            user.points = syncResponse.totalPoints;
            user.steps = syncResponse.totalSteps;
        } catch (error:any) {
            console.log(error.message);
            setIsSyncing(false);
            setSyncError(true);
        }
    }


    return (
        <section className="flex flex-col justify-center items-center">
            <div className="flex gap-2 justify-center rounded-lg mt-2 w-full">
                
                <div className="flex flex-col justify-center rounded-lg mt-2 w-full">
                    <div className={`flex flex-row items-center justify-center w-full mb-2`}>
                        <h1 className="text-light-2 text-heading3-bold">Total Steps</h1>
                    </div>

                    <div className={`flex flex-col text-center w-full items-center justify-center`}>
                        <h1 className={`text-heading1-bold text-light-1 ${!user?.steps && 'h-12 w-1/2 rounded-lg animate-pulse bg-glassmorphism'}`}>{user?.steps}</h1>
                        <p className=" text-gray-300 text-subtle-medium">August-15 to September-15</p>
                    </div>

                    <div className="flex flex-row w-full justify-center mt-4">
                        <div className="flex flex-col justify-center items-center w-full">
                            <Image
                                src="/assets/points-icon.png" 
                                alt="Step Icon" 
                                width={38} 
                                height={38} 
                            />
                            <h2 className={`text-light-2 text-body-bold ${!user?.points && 'h-6 w-1/2 rounded-lg animate-pulse bg-glassmorphism'}`}>{user?.points}</h2>
                            <h2 className="font-mono text-light-2 text-body-normal">Points</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <Image
                                src="/assets/rank-icon.png" 
                                alt="Step Icon" 
                                width={38} 
                                height={38} 
                            />
                            <h2 className="text-light-2 text-body-bold">{rank}/{numberOfPlayers}</h2>
                            <h2 className="font-mono text-light-2 text-body-normal">Rank</h2>
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-col items-center justify-center rounded-lg mt-2 w-full max-md:hidden">
                    <div className="text-light-2">Test</div>
                </div> */}
                
            </div>

            <div className="flex flex-col w-full justify-center items-center">
            <button onClick={syncSteps} className={`flex justify-center items-center bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-light-1 text-heading3-bold w-4/5 h-14 rounded-2xl mt-4 ${isSyncing && 'bg-amber-500 '}`}>
                <svg className={`animate-spin w-7 h-7 mr-2 ${!isSyncing && 'hidden'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
                {isSyncing ? 'SYNCING...' : 'SYNC STEPS'}
            </button>
            {syncError ? <ErrorView errorMessage="Sync Failed! Please try again later."></ErrorView>: ''}
        </div>
            <p className="text-slate-300 text-subtle-medium mt-2">Click to sync steps from GoogleFit</p>
        </section>
    )
}

export default SummaryCard;