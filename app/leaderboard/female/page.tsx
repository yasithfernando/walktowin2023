//import GenderLeaderboard from "@/components/leaderboards/GenderLeaderboard";
import HideLeaderboard from "@/components/leaderboards/HideLeaderboard";
import Player from "@/constants/player";
import { testRankData } from "@/constants/testData";

async function Page(){
    const testData: Player[] = testRankData;

    return (
        <div className="flex flex-col justify-center items-center">
            {/* <Leaderboard rankData = {testData}/> */}
            {/* <GenderLeaderboard gender='female'/> */}
            <HideLeaderboard/>
        </div>
    )
}

export default Page;