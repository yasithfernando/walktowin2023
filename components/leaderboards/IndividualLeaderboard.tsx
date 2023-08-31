"use client"

import LeaderboardItem from "../shared/LeaderboardItem";
import { useLeaderboardContext } from "@/context/LeaderboardContext";

const IndividualLeaderboard = ()=>{
    const {allPlayers} = useLeaderboardContext();

    const rankData = allPlayers ? allPlayers : [];
    const profileImageUrl =  "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50";

    if(rankData.length === 0){
        return null;
    }

    if(!rankData[1]?.name){
        console.log(rankData);
        return null;
    }

    
    return (
        <div className="flex flex-col justify-center w-full mt-2 pt-4 lg:w-3/4">

            <div className="flex flex-row w-full justify-center text-center">

                <div id="second-place" className="flex items-end justify-center w-1/4 text-light-2">
                    <div className="flex flex-col justify-center items-center">
                        <img src={profileImageUrl} alt="profile" className="rounded-full h-20 w-20 border-purple-400 border-2"/>
                        <div className="flex justify-center items-center rounded-full w-7 h-7 bg-gradient-to-tl from-violet-500 to-fuchsia-500 -mt-4">
                            <p className="text-light-2 text-body-bold">2</p>
                        </div>
                        <h1 className="text-light-2 text-body-bold">{rankData[1].name.split(' ')[0]}</h1>
                    </div>
                </div>


                <div id="first-place" className="flex flex-col justify-center items-center w-2/4 lg:w-2/6 text-light-2">
                    <div className="flex flex-col justify-center items-center">
                        <img src={profileImageUrl} alt="profile" className="rounded-full h-28 w-28 lg:h-32 lg:w-32 border-yellow-400 border-2"/>
                        <div className="flex justify-center items-center rounded-full w-7 h-7 bg-gradient-to-tl from-yellow-500 to-amber-500 -mt-4">
                            <p className="text-light-2 text-body-bold">1</p>
                        </div>
                        <h1 className="text-light-2 text-body-bold">{rankData[0].name.split(' ')[0]}</h1>
                    </div>
                </div>


                <div id="third-place" className="flex items-end justify-center w-1/4 text-light-2">
                    <div className="flex flex-col justify-center items-center">
                        <img src={profileImageUrl} alt="profile" className="rounded-full h-20 w-20 border-purple-400 border-2"/>
                        <div className="flex justify-center items-center rounded-full w-7 h-7 bg-gradient-to-tl from-violet-500 to-fuchsia-500 -mt-4">
                            <p className="text-light-2 text-body-bold">3</p>
                        </div>
                        <h1 className="text-light-2 text-body-bold">{rankData[2].name.split(' ')[0]}</h1>
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
                {rankData.map((player,index) => (
                    <LeaderboardItem key={player.id} player={player} index={index}/>
                ))}
            </div>

        </div>
    )
}

export default IndividualLeaderboard;