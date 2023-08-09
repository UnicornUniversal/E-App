import React from "react";
import { PieChart } from "../components";

const Dashboard = () => {
  return   <div>
  <div className="grid grid-cols-2 gap-8">
  <PieChart
    series={[7, 6]}
    colors={['#475ae8', '#e4b8ef']}
    title="Users"
    value="4"
    />
  <PieChart
    series={[7, 6]}
    colors={['#475ae8', '#e4b8ef']}
    title="Tasks"
    value="4"
    />
  </div>

</div>

};


export default Dashboard;
