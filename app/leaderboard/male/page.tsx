import GenderLeaderboard from "@/components/leaderboards/GenderLeaderboard";
//import Leaderboard from "@/components/shared/Leaderboard";
import Player from "@/constants/player";
import { testRankData } from "@/constants/testData";

async function Page(){
    const testData: Player[] = testRankData;

    const gender = "male";

    return (
        <div className="flex flex-col justify-center items-center">
            {/* <Leaderboard rankData = {testData}/> */}
            <GenderLeaderboard gender={gender}/>
        </div>
    )
}

export default Page;