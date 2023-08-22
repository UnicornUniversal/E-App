'use client'
import React, { useState } from "react";
import { PieChart, DashboardCard, LineChart, CardTitle} from "../components"
import useData from "../hooks/useData";
import DatePicker from "../components/calendar/CalendarRange";
import { Range } from "react-date-range";
import { IoBarChart, IoRocketSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};


const Dashboard = () => {

  const { cardData } = useData()
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  return   <div className="space-y-4">
  <div className="grid grid-cols-5 gap-4">
  {cardData.map(item => (
  <DashboardCard
  key={item.title}
  percentages={ item.percentages }
  value={item.value}
  title={item.title}
  color={item.percentages.includes('-') ? 
  'bg-red-500' : 'bg-green-500'}
  />))}
  </div>
    <div className="grid grid-cols-4 gap-4 grid-rows-2">
      <div className="dark:bg-gray-200 bg-gray-2 grid col-span-2 p-4 rounded-lg">
        <CardTitle
        icon={IoBarChart}
        title="Revenue"
        />
        <div className="w-full grid place-items-center">
        <LineChart series={[]} colors={[]}/>
        </div>

      </div>
      <div className=" flex flex-col gap-4 rounded-lg">
      <div className="bg-gray-2 w-full rounded-lg h-full p-4">
      <CardTitle
        icon={IoBarChart}
        title="Website Statistics"
        />
        <div className="flex justify-between  items-center ">
        <PieChart
              title="Total visitors"
              series={[2, 4]} 
              colors={['#FFD200', '#FF0000']}       
               />
        <PieChart
              title="Total visitors"
              series={[2, 4]} 
              colors={['#FFD200', '#FF0000']}       
               />
        <PieChart
              title="Total visitors"
              series={[2, 4]} 
              colors={['#FFD200', '#FF0000']}       
               />
        </div>
      </div>
      <div className="bg-gray-2 w-full rounded-lg h-full p-4">
      <CardTitle
        icon={IoBarChart}
        title="Revenue"
        />
      </div>
      </div>
      <div className="bg-gray-2 grid p-4 rounded-lg">
      <CardTitle
        icon={FaCalendarAlt}
        title="Calendar"
        />
      <div className="grid place-items-center">
        <DatePicker
        onChange={() => setDateRange({})}
        value={dateRange}
        disabledDates={[]}
        />

      </div>

      </div>
    </div>
</div>

};


export default Dashboard;
