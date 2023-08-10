import ReactApexChart from "react-apexcharts"

interface LineChartProps {
    series: number[]
    colors: string[]
    value?: string
    title?: string
}

const LineChart: React.FC<LineChartProps> = ({colors, series, title, value}) => {

  return     <ReactApexChart
  options={{
    chart: {type: 'line'},
    colors,
    legend: {show: false },
    dataLabels: { enabled: false }
  }}
  series = { [{
    name: "Session Duration",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 34]
  },
  {
    name: "Page Views",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35, 23]
  },
  {
    name: 'Total Visits',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47, 23, 34, 32]
  },
]}
  type="line"
  width={'500'}
/> 
}

export default LineChart

