'use client'
import ReactApexChart from "react-apexcharts";

interface PieChartProps {
    series: number[]
    colors: string[]
    value?: string
    title?: string
}

const PieChart: React.FC<PieChartProps> = ({ series, colors, value, title }) => {

  return <div className="flex items-center gap-4 justify-between p-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-thin">{title}</h1>
          <h1 className="text-4xl font-bold">{value}</h1>
        </div>
          <ReactApexChart
            options={{
              chart: {type: 'donut'},
              colors,
              legend: {show: false },
              dataLabels: { enabled: false }
            }}
            series={series}
            type="donut"
            width={`170px`}
          />
        </div> 
  
};

export default PieChart;
