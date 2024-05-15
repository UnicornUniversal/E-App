import { CardData } from '@/app/hooks/useData'
import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'



const DashboardCard: React.FC<CardData> = ({ percentages, title, value, color}) => {
  return <div className=' min-w-[270px] min-h-[190px] bg-gray-2 rounded-lg flex flex-col justify-between p-4'> 
          {/* first div */}
          <div className='flex justify-between items-center'>
            <div className={`badge ${color}`}>{percentages}%</div>
            <div className='flex items-center gap-2'>
            <h1>Monthly</h1>
            <FaEllipsisH/>
          </div>
          </div> 

          <div>
            <h1 className='text-3xl font-bold'>{value}</h1>
          </div> 

          <div>
          <h1>{title}</h1>  
          </div> 
         </div>
}

export default DashboardCard