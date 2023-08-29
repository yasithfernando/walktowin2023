"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';

import { useAppContext } from "@/context/AppContext";


interface Props {
  stepsForChart: number[]; // Assuming you pass an array of step data
  steps: number;
}

const SummaryCard = ({ steps2, points2, rank } : any) => {

    const {user} = useAppContext();
    //const {steps, setSteps} = useState();
    //const {points, setPoints} = useState(0);

    //setSteps(user?.steps);
    //setPoints(user?.points);

    const steps = user?.steps;
    const points = user?.points;
    //const rank = user?.rank;

    return (
        <section className="flex flex-col justify-center items-center">
            <div className="flex gap-2 justify-center rounded-lg mt-2 w-full">
                
                <div className="flex flex-col justify-center rounded-lg mt-2 w-full">
                    <div className={`flex flex-row items-center justify-center w-full mb-2`}>
                        {/* <Image className="mr-2 border"
                        src="/assets/icons/step-icon.svg" 
                        alt="Step Icon" 
                        width={24} 
                        height={24} /> */}
                        <h1 className="text-light-2 text-heading3-bold">Steps</h1>
                    </div>
                    {/* Bar chart showing step summary of last 7 days */}
                    {/* <div className="w-full h-auto">
                        <canvas ref={chartRef}></canvas>
                    </div> */}

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
                            <h2 className="text-light-2 text-body-bold">{rank}/126</h2>
                            <h2 className="font-mono text-light-2 text-body-normal">Rank</h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center rounded-lg mt-2 w-full max-md:hidden">
                    <div className="text-light-2">Test</div>
                </div>
                
            </div>

            <button className="bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-light-1 text-heading3-bold w-4/5 h-14 rounded-2xl mt-4">
                SYNC STEPS
            </button>
            <p className="text-slate-300 text-subtle-medium mt-2">Click to sync steps from GoogleFit</p>
        </section>
    )
}

export default SummaryCard;