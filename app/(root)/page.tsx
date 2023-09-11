
import SyncBanner from "@/components/banners/SyncBanner";
import { currentUser } from "@clerk/nextjs";
import ErrorView from "@/components/notifications/ErrorView";


async function Home() {
  let loggedInEmail = "";
  try {
    const loggedInUser = await currentUser();
  
    if(!loggedInUser) return null;
  
    loggedInEmail = loggedInUser.emailAddresses[0].emailAddress;
  } catch (error) {
    return <ErrorView errorMessage="Please check your internet connection!"></ErrorView>
  }



  return (
    <div>
      {/* <h1 className="head-text text-left">Home</h1> */}
      <SyncBanner gmail={loggedInEmail}/>
      
    </div>
  )
}

export default Home;