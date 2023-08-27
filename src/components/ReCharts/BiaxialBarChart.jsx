import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BiaxialBarChart = ({ data }) => {
  return (
    <BarChart
      width={800}
      height={620}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="po" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="neg" fill="#82ca9d" />
    </BarChart>
  );
};

export default BiaxialBarChart;
