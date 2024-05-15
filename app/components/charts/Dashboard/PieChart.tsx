'use client'
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


interface PieChartProps {
    series: number[]
    colors: string[]
    value?: string
    title?: string
}

const PieChart: React.FC<PieChartProps> = ({ series, colors, value, title }) => {

  return <div className="flex flex-col items-center gap-2">
        {/* <div className="space-y-2">
          <h1 className="text-2xl font-thin">{title}</h1>
          <h1 className="text-4xl font-bold">{value}</h1>
        </div> */}
          <ApexCharts
            options={{
              chart: {type: 'donut'},
              colors,
              legend: {show: false },
              dataLabels: { enabled: false }
            }}
            series={series}
            type="donut"
            width={`100px`}
          />
          <h1>{title}</h1>
        </div> 
  
};

export default PieChart;
