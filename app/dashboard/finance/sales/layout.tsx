'use client'


import { SalesNav } from '@/app/components'
import type { Metadata } from 'next'


 const metadata: Metadata = {
  title: 'Finance - Sales',
  description: 'The Everything App',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div >
    <div className='py-4'>
     <SalesNav/>
    </div>
        {children}
       
    </div>
  )
}