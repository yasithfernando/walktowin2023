
import { ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut, currentUser, useUser } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'
import LederboardTitleCard from '@/components/cards/LeaderboardTitleCard'
import { LeaderboardProvider } from '@/context/LeaderboardContext'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Walk to Win',
    description: 'A step challenge app for Xians'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    let loggedInEmail = "";
    try {
      const loggedInUser = await currentUser();
    
      if(!loggedInUser) return null;
    
      loggedInEmail = loggedInUser.emailAddresses[0].emailAddress;
    } catch (error) {
      console.log("All Rights Reserved")
    }
  return (
    <ClerkProvider>
     
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <Topbar/>
            <main className='flex flex-row'>
              <LeftSidebar/>

              <section className='main-container'>
                <LederboardTitleCard/>
                <div className='w-full max-w-4xl'>
                  <Suspense fallback={<Loading/>}>
                     <LeaderboardProvider>
                      {children}
                    </LeaderboardProvider>
                  </Suspense>
                </div>
              </section>

              <RightSidebar gmail={loggedInEmail}/>

            </main>
            <Bottombar/>
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn/>            
          </SignedOut>

          
          
        </body>
      </html>
    </ClerkProvider>
  )
}
