import { Icon } from '@mui/material'
import React from 'react'
import { IconType } from 'react-icons'

interface CardTitleProps {
    icon: IconType
    title: string
}

const CardTitle: React.FC<CardTitleProps> = ({icon: Icon, title}) => {
  return <div className="flex items-center gap-2"><Icon/><h1>{title}</h1></div>
}

export default CardTitle