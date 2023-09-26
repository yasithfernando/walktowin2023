import HideLeaderboard from "@/components/leaderboards/HideLeaderboard";
//import IndividualLeaderboard from "@/components/leaderboards/IndividualLeaderboard";
//import MaleLeaderboard from "@/components/leaderboards/IndividualLeaderboard";
//import Leaderboard from "@/components/shared/Leaderboard";
import Player from "@/constants/player";
import { testRankData } from "@/constants/testData";

async function Page(){
    const testData: Player[] = testRankData;

    return (
        <div className="flex flex-col justify-center items-center">
            {/* <Leaderboard rankData = {testData}/> */}
            {/* <IndividualLeaderboard/> */}
            <HideLeaderboard/>
        </div>
    )
}

export default Page;