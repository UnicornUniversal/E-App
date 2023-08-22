'use client'


import type { Metadata } from 'next'
import { Header, SideNav } from '../components'
import { useAppContext } from '../context/AppContext'


 const metadata: Metadata = {
  title: 'Business Essentials',
  description: 'The Everything App',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { handleSideToggle, sideToggle } = useAppContext()

  return (
    <div >
      <div >
        <div className='grid grid-cols-12 bg-black dark:bg-gray-100 '> 
        <div className={`grid ${sideToggle ? 'col-span-2' : 'z-[50] w-[80px]'} bg-gray-2`}>
        <SideNav/>
        </div>
        <div className={`grid ${sideToggle ? 'col-span-10' : 'col-span-11'} p-4`}>
        <div className='space-y-4'> 
        <Header/>
        {children}
        </div> 
        </div>
        </div>
      </div>
    </div>
  )
}
