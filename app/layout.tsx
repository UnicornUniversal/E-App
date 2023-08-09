'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppContext } from './context/AppContext'
import { SessionProvider } from "next-auth/react";
import { ToasterWrap } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BusinessEssentials',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <SessionProvider>
      <ToasterWrap/> 
      <AppContext>
        {children}
      </AppContext>
      </SessionProvider>
      </body>
    </html>
  )
}