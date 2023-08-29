"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

interface Props {
  stepsForChart: number[]; // Assuming you pass an array of step data
}

const SummaryCard = ({ steps, points, rank } : any) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
      if (chartRef.current) {
        // Destroy previous chart instance if exists
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx!, {
            type: 'bar',
            data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [
                {
                label: 'Steps',
                data: [12,23,9,13,4,8,15,12,23,9,13,4,8,15],
                backgroundColor: 'hsla(244, 100%, 75%, 1)', // Adjust colors
                borderColor: 'rgba(75, 192, 192, 1)', // Adjust colors
                borderWidth: 0,
                barPercentage: 0.3, // Adjust this value (0 to 1) for bar width
                categoryPercentage: 1, // Keep this at 1 for equal spacing between bars
                },
            ],
            },
            options: {
            scales: {
                y: {
                beginAtZero: true,
                display: false,
                },
            },
            },
        });
    }
    })

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

                    <div className="text-center w-full">
                        <h1 className="text-heading1-bold text-light-1">{steps}</h1>
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
                            <h2 className="text-light-2 text-body-bold">{points}</h2>
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