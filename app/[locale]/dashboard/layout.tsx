'use client'


import type { Metadata } from 'next'
import { Header, SideNav } from '../../components'
import { useAppContext } from '../../context/AppContext'


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
        <div className='flex h-screen overflow-y-scroll relative'> 
        <div className={`grid ${sideToggle ? 'col-span-2 fixed' : 'z-[50] '} bg-gray-2 h-screen bottom-0 top-0`}>
        <SideNav/>
        </div>
        <div className={`w-full ${sideToggle ? 'col-span-10' : 'col-span-11'} p-4`}>
        <div className='space-y-4'> 
        <Header/>
        <div className=''>
        {children}
        </div>
        </div> 
        </div>
        </div>
      </div>
    </div>
  )
}
