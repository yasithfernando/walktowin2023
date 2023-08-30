"use client"
import Image from "next/image";
import ErrorView from "../notifications/ErrorView";
import SummaryLoading from "../loading-skeletons/SummaryLoading";
import { useCompetition, useUser } from "@/context/context";
import { useState } from "react";
import { fetchAccessToken, syncStepsToBackend } from "@/lib/actions/user.actions";
import { fetchStepCounts } from '@/lib/actions/google.actions';
import { useClerk } from "@clerk/nextjs";
import SyncButton from "../shared/SyncButton";


interface Props {
  stepsForChart: number[]; // Assuming you pass an array of step data
  steps: number;
}

const SummaryCard = ({ gmail} : any) => {

    const {user, isLoading, isError} = useUser(gmail);
    const {allPlayers,isAllPlayersLoading,isErrorInAllPlayers} = useCompetition();
    const userId = useClerk().user?.id as string;

    let isSyncing = false;


    if(isLoading || isAllPlayersLoading)return <SummaryLoading></SummaryLoading>

    if(isError || isErrorInAllPlayers) return <div className="text-light-2 text-body-bold">Error...</div>

    if(user.error){
        return (<ErrorView errorMessage={user.message}></ErrorView>
        )
    }

    const points = user?.points;
    let steps = user?.steps;

    let rank = 0;

    const numberOfPlayers = allPlayers?.length;

    const index = allPlayers?.findIndex(
        (player:any)=>{
            return (player.steps === user?.steps && player.points === user?.points)
        })

        if(index !== undefined){
            rank = index+1;
        }

    


    return (
        <section className="flex flex-col justify-center items-center">
            <div className="flex gap-2 justify-center rounded-lg mt-2 w-full">
                
                <div className="flex flex-col justify-center rounded-lg mt-2 w-full">
                    <div className={`flex flex-row items-center justify-center w-full mb-2`}>
                        <h1 className="text-light-2 text-heading3-bold">Steps</h1>
                    </div>

                    <div className={`flex flex-col text-center w-full items-center justify-center`}>
                        <h1 className={`text-heading1-bold text-light-1 ${!steps && 'h-12 w-1/2 rounded-lg animate-pulse bg-glassmorphism'}`}>{steps}</h1>
                        <p className=" text-gray-300 text-subtle-medium">You are on track!</p>
                    </div>

                    <div className="flex flex-row w-full justify-center mt-4">
                        <div className="flex flex-col justify-center items-center w-full">
                            <Image
                                src="/assets/points-icon.png" 
                                alt="Step Icon" 
                                width={38} 
                                height={38} 
                            />
                            <h2 className={`text-light-2 text-body-bold ${!points && 'h-6 w-1/2 rounded-lg animate-pulse bg-glassmorphism'}`}>{points}</h2>
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

            <SyncButton></SyncButton>
            <p className="text-slate-300 text-subtle-medium mt-2">Click to sync steps from GoogleFit</p>
        </section>
    )
}

export default SummaryCard;