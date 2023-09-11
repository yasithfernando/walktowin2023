"use client"
import { use, useEffect, useState } from "react";
import { useCompetition, useUser } from "@/context/context";
import { auth, clerkClient } from "@clerk/nextjs";

function RightSidebar({gmail}:any){

    const [loggedInEmail, setLoggedInEmail] = useState('');
    const [userData, setUserData] = useState(null);


    const {user} = useUser(gmail);

    return(
        <section className="custom-scrollbar rightsidebar ">
            
            <div className="flex flex-1 flex-col justify-start h-1/3 w-56">
                <h3 className="text-heading4-medium text-light-1 bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-center rounded-md">
                    Your Summary
                </h3>
                <ul className="w-full h-full overflow-scroll custom-scrollbar">
                    {
                        user?.error ? <div></div> : user?.total_steps.map((item:any,index:number)=>{
                            if(!item.date){
                                return null;
                            }
                            return(
                                <li key={index} className='flex flex-row justify-between p-1'>
                                    <span className='text-light-2 text-subtle-semibold'>{item.date.split("T")[0]}</span>
                                    <span className='text-light-2 text-subtle-semibold'>{item.steps}</span>
                                </li>
                            )
                        }
                        )
                    }
                    
                </ul>
            </div>
            {/* <div className="flex flex-1 flex-col justify-start h-1/3">
                <h3 className="text-heading4-medium text-light-1 bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-center rounded-md px-3">
                    Leaderboard Summary
                </h3>
            </div> */}
            
        </section>
    )
}

export default RightSidebar;