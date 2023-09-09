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

const BiaxialBarChart = ({
  data,
  width,
  height,
  xAxisId,
  yAxisLeftId,
  yAxisRightId,
  barDataKey,
  barDataColor,
}) => {
  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey={xAxisId} />
      <YAxis yAxisId={yAxisLeftId} orientation={yAxisLeftId} stroke="#8884d8" />
      <YAxis
        yAxisId={yAxisRightId}
        orientation={yAxisRightId}
        stroke="#82ca9d"
      />
      <Tooltip />
      {barDataKey?.map((obj) => (
        <Bar yAxisId={obj.position} dataKey={obj.dataKey} fill={obj.color} />
      ))}
    </BarChart>
  );
};

export default BiaxialBarChart;
