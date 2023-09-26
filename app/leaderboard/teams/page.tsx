
import HideLeaderboard from "@/components/leaderboards/HideLeaderboard";
//import TeamsLeaderboard from "@/components/leaderboards/TeamsLeaderboard";
import Player from "@/constants/player";
import { testRankData } from "@/constants/testData";

async function Page(){
    const testData: Player[] = testRankData;

    
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <TeamsLeaderboard/> */}
            <HideLeaderboard/>
        </div>
    )
}

export default Page;