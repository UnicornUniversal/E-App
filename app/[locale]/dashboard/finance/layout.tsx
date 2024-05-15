'use client'


import type { Metadata } from 'next'


 const metadata: Metadata = {
  title: 'Business Essentials',
  description: 'The Everything App',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div >
     
        {children}
       
    </div>
  )
}