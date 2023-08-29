"use client"

import Player from "@/constants/player";
import { useClerk } from "@clerk/nextjs";
import LeaderboardItem from "../shared/LeaderboardItem";
import { useAppContext } from "@/context/AppContext";

const FemaleLeaderboard = ()=>{
    //const userEmail = useClerk().user?.primaryEmailAddress?.toString();
    //const userExist = rankData.find(player => player.email === userEmail);
    
    const {femalePlayers} = useAppContext();

    const rankData = femalePlayers ? femalePlayers : [];
    const profileImageUrl1 =  `https://source.boringavatars.com/beam/50/jimmy%20anderson?colors=582770,773D94,943D8A,C22760,E81764`;
    const profileImageUrl2 = `https://source.boringavatars.com/beam/50/stuart%20broad?colors=582770,773D94,943D8A,C22760,E81764`;
    const profileImageUrl3 = `https://source.boringavatars.com/beam/50/joe%20root?colors=582770,773D94,943D8A,C22760,E81764`;

    console.log(rankData);

    if(rankData.length === 0){
        return (
            <div className="flex flex-col justify-center w-full mt-2 pt-4 lg:w-3/4">

                <div className="flex flex-row w-full justify-center text-center">

                    <div className="flex items-end justify-center w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <div className="rounded-full h-20 w-20 bg-slate-600 border-2 animate-pulse"></div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-2/4 lg:w-2/6">
                        <div className="flex flex-col justify-center items-center">
                            <div className="rounded-full h-28 w-28 lg:h-32 lg:w-32 bg-slate-600 border-2 animate-pulse"> </div>
                        </div>
                    </div>

                    <div className="flex items-end justify-center w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <div className="rounded-full h-20 w-20 bg-slate-600 border-2 animate-pulse"></div>
                        </div>
                    </div>

                    
                </div>
            </div>
        );
    }

    
    return (
        <div className="flex flex-col justify-center w-full mt-2 pt-4 lg:w-3/4">

            <div className="flex flex-row w-full justify-center text-center">

                <div id="second-place" className={`${rankData[1] && 'hidden'}flex items-end justify-center w-1/4 text-light-2`}>
                    <div className="flex flex-col justify-center items-center">
                        <img src={profileImageUrl1} alt="profile" className="rounded-full h-20 w-20 border-purple-400 border-2"/>
                        <div className="flex justify-center items-center rounded-full w-7 h-7 bg-gradient-to-tl from-violet-500 to-fuchsia-500 -mt-4">
                            <p className="text-light-2 text-body-bold">2</p>
                        </div>
                        <h1 className="text-light-2 text-body-bold">{rankData[1]?.name.split(' ')[0]}</h1>
                    </div>
                </div>


                <div id="first-place" className="flex flex-col justify-center items-center w-2/4 lg:w-2/6 text-light-2">
                    <div className="flex flex-col justify-center items-center">
                        <img src={profileImageUrl2} alt="profile" className="rounded-full h-28 w-28 lg:h-32 lg:w-32 border-yellow-400 border-2"/>
                        <div className="flex justify-center items-center rounded-full w-7 h-7 bg-gradient-to-tl from-yellow-500 to-amber-500 -mt-4">
                            <p className="text-light-2 text-body-bold">1</p>
                        </div>
                        <h1 className="text-light-2 text-body-bold">{rankData[0]?.name.split(' ')[0]}</h1>
                    </div>
                </div>


                <div id="third-place" className={`${rankData[2] && 'hidden'}flex items-end justify-center w-1/4 text-light-2`}>
                    <div className="flex flex-col justify-center items-center">
                        <img src={profileImageUrl3} alt="profile" className="rounded-full h-20 w-20 border-purple-400 border-2"/>
                        <div className="flex justify-center items-center rounded-full w-7 h-7 bg-gradient-to-tl from-violet-500 to-fuchsia-500 -mt-4">
                            <p className="text-light-2 text-body-bold">3</p>
                        </div>
                        <h1 className="text-light-2 text-body-bold">{rankData[2]?.name.split(' ')[0]}</h1>
                    </div>
                </div>
            </div>
            {/* {userExist ? (
                 (
                <div className="flex justify-between items-center w-full p-3 pl-4 mt-4 text-light-2 text-body-normal bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-xl">
                    <p> Your Current Rank</p>
                    <p> 2 </p>
                </div>
                )
            ): (<div></div>)} */}
            <div>
                {rankData.map(player => (
                    <LeaderboardItem key={player.id} player={player}/>
                ))}
            </div>

        </div>
    )
}

export default FemaleLeaderboard;