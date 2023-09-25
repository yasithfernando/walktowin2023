import e from "express"
import Notification from "../notifications/Notification";

const HideLeaderboard = () => {

    return (
        <div className="w-full flex justify-center mt-4 text-center rounded-md bg-dark-3 p-3 border-2 border-fuchsia-500">
            <p className= "text-body-medium text-light-2">
                The leaderboard is currently hidden to keep the suspense alive on this final day. Stay tuned for the big reveal as we crown the champions! 🌟
            </p>
            {/* <Notification notification="The leaderboard is currently hidden to keep the suspense alive on this final day. Stay tuned for the big reveal as we crown the champions! 🌟"/> */}
        </div>
    )
}


export default HideLeaderboard;