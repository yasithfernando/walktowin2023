"use client"

import { useFemalePlayers, useMalePlayers } from "@/context/context";
import LeaderboardItem from "../shared/LeaderboardItem";


const GenderLeaderboard = ({ gender }: { gender: string })=>{

    let rankData = [];

    if(gender === 'male'){
        const {malePlayers, isMalePlayersLoading} = useMalePlayers();
        if(isMalePlayersLoading){
            return (
                <svg className={`animate-spin w-7 h-7 mr-2 mt-3`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
            );
        }
        if(malePlayers){
            rankData = malePlayers;
        }
    }
    else if(gender === 'female'){
        const {femalePlayers, isFemalePlayersLoading} = useFemalePlayers();
        if(isFemalePlayersLoading){
            return (
                <svg className={`animate-spin w-7 h-7 mr-2 mt-3`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
            );
        }
        if(femalePlayers){
            rankData = femalePlayers;
        }
    }
    const profileImageUrl1 =  `https://source.boringavatars.com/beam/50/xians%20walk?colors=582770,773D94,943D8A,C22760,E81764`;
    const profileImageUrl2 =  `https://source.boringavatars.com/beam/50/xianssdf%20walk?colors=582770,773D94,943D8A,C22760,E81764`;
    const profileImageUrl3 =  `https://source.boringavatars.com/beam/50/xianssaf%20walk?colors=582770,773D94,943D8A,C22760,E81764`;

    
    return (
        <div className="flex flex-col justify-center w-full mt-2 pt-4 lg:w-3/4">

            <div className="flex flex-row w-full justify-center text-center">

                <div id="second-place" className="flex items-end justify-center w-1/4 text-light-2">
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


                <div id="third-place" className="flex items-end justify-center w-1/4 text-light-2">
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
                 {rankData.map((player:any,index:any) => (
                    <LeaderboardItem key={player.id} player={player} index={index} isTeam={false}/>
                ))}
            </div>

        </div>
    )
}

export default GenderLeaderboard;