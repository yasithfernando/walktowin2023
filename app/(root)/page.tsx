import SyncBanner from "@/components/banners/SyncBanner";
import SummaryCard from "@/components/cards/SummaryCard";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      {/* <h1 className="head-text text-left">Home</h1> */}
      <SyncBanner/>
      <SummaryCard steps={10000} points={125} rank={4}/>
    </div>
  )
}