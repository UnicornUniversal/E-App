'use client'


import type { Metadata } from 'next'
import { SideNav } from '../components'
import { useAppContext } from '../context/AppContext'


export const metadata: Metadata = {
  title: 'Business Essentials',
  description: 'The Everything App',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { handleSideToggle } = useAppContext()

  return (
    <div >
      <div >
        <div className='grid grid-cols-12'> 
        <div className='grid col-span-2'>
          <SideNav/>
        </div>
        <div className='grid col-span-10 p-4'>
        {children}
        </div>
        </div>
      </div>
    </div>
  )
}
