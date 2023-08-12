import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface SalesNavItemProps {
    icon: IconType
    label: string
    link: string
}

const SalesNavItem: React.FC<SalesNavItemProps> = ({icon: Icon, label, link = '/'}) => {
  return <div className='cursor-pointer hover:bg-gray-2 flex items-center justify-center gap-2 p-2 rounded-lg'>
    <Link className='flex items-center justify-center gap-2 ' href={link}>
            <Icon/>
            <h1>{label}</h1>
    </Link>
    </div>
}

export default SalesNavItem