"use client"

import {sidebarLinks, leaderboardTabs} from "@/constants";
import { SignOutButton, SignedIn, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter} from 'next/navigation';

function LederboardTitleCard(){
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className="grid grid-flow-col justify-stretch items-center gap-0 max-lg:w-full lg:w-3/6 bg-gray-900">
            {leaderboardTabs.map((link)=>{
                const isActive = pathname === link.route;
                return(
                    <Link
                    href={link.route}
                    key={link.label}
                    className={`flex flex-col justify-center items-center h-10 ${isActive && 'bg-gradient-to-tr from-violet-500 to-fuchsia-500'}`}
                    >
                        {/* <Image
                            src={link.icon}
                            alt={link.label}
                            width={50}
                            height={50}
                        /> */}
                        <p className="text-light-1 text-body-bold">{link.label}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default LederboardTitleCard;