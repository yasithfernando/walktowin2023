
import SyncBanner from "@/components/banners/SyncBanner";
import SummaryCard from "@/components/cards/SummaryCard";
import { UserButton, currentUser } from "@clerk/nextjs";
import { Suspense } from "react";
import Loading from "./loading";


async function Home() {
  const loggedInUser = await currentUser();

  if(!loggedInUser) return null;



  return (
    <div>
      {/* <h1 className="head-text text-left">Home</h1> */}
      <SyncBanner/>
      <SummaryCard steps={10000} points={125} rank={4}/>
    </div>
  )
}

export default Home;