import GenderLeaderboard from "@/components/leaderboards/GenderLeaderboard";
import Player from "@/constants/player";
import { testRankData } from "@/constants/testData";

async function Page(){
    const testData: Player[] = testRankData;

    return (
        <div className="flex flex-col justify-center items-center">
            {/* <Leaderboard rankData = {testData}/> */}
            <GenderLeaderboard gender='female'/>
        </div>
    )
}

export default Page;