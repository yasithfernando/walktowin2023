import Leaderboard from "@/components/shared/Leaderboard";
import Player from "@/constants/player";
import { testRankData } from "@/constants/testData";

async function Page(){
    const testData: Player[] = testRankData;

    return (
        <div className="flex flex-col justify-center items-center">
            <Leaderboard rankData = {testData}/>
        </div>
    )
}

export default Page;