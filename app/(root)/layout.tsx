
import { ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'
import { dark } from '@clerk/themes'
import { AppProvider } from '@/context/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Walk to Win',
    description: 'A step challenge app for Xians'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
    <ClerkProvider appearance={{
        baseTheme: dark,
      }}>
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <Topbar/>
            <main className='flex flex-row'>
              <LeftSidebar/>

              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>

              <RightSidebar/>

            </main>
            <Bottombar/>
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn/>            
          </SignedOut>

          
          
        </body>
      </html>
    </ClerkProvider>
      </AppProvider>
  )
}
