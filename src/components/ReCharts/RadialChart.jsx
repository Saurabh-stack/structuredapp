import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
const RadialChart = ({ data }) => {
  return (
    <RadialBarChart
      cy={"50%"}
      width={350}
      height={250}
      innerRadius="40%"
      outerRadius="100%"
      data={data}
      startAngle={180}
      endAngle={0}
      className="border-2 border-red-500"
    >
      <RadialBar
        minAngle={10}
        label={{ fill: "#666", position: "insideStart" }}
        background
        clockWise={true}
        dataKey="uv"
      />

      <Tooltip />
    </RadialBarChart>
  );
};

export default RadialChart;
