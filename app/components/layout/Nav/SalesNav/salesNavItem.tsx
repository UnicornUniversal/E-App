import React from 'react'
import { IconType } from 'react-icons'

interface SalesNavItemProps {
    icon: IconType
    label: string
}

const SalesNavItem: React.FC<SalesNavItemProps> = ({icon: Icon, label}) => {
  return <div className='cursor-pointer hover:bg-gray-2 flex items-center justify-center gap-2 p-2 rounded-lg'>
            <Icon/>
            <h1>{label}</h1>
        </div>
}

export default SalesNavItem