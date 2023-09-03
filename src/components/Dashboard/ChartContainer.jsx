import React from "react";
import CardContainer from "../shared/card/CardContainer";
import Card from "../shared/card";
import PieChartActiveShape from "../ReCharts/PieChartActiveShape";
import {
  BUFintechText,
  BUMediaText,
  BUPLMText,
  BUEnggDesignText,
  EmployeeTxt,
} from "../../constants";
import BiaxialBarChart from "../ReCharts/BiaxialBarChart";
const ChartContainer = () => {
  const chartBuData = [
    {
      chartGroup: "Fintech",
      data: [
        { name: "On Project", value: 670 },
        { name: "Bench", value: 50 },
        { name: "Bench Notice", value: 20 },
        { name: "Project Notice", value: 35 },
      ],
      feedback: { name: BUFintechText, po: 300, neg: 20, neutral: 150 },
    },
    {
      chartGroup: "Media BU",
      data: [
        { name: "On Project", value: 670 },
        { name: "Bench", value: 50 },
        { name: "Bench Notice", value: 20 },
        { name: "Project Notice", value: 35 },
      ],
      feedback: { name: BUMediaText, po: 150, neg: 5, neutral: 100 },
    },
    {
      chartGroup: "PLM BU",
      data: [
        { name: "On Project", value: 670 },
        { name: "Bench", value: 50 },
        { name: "Bench Notice", value: 20 },
        { name: "Project Notice", value: 35 },
      ],
      feedback: { name: BUPLMText, po: 238, neg: 37, neutral: 93 },
    },
    {
      chartGroup: "Engineering Design BU",
      data: [
        { name: "On Project", value: 670 },
        { name: "Bench", value: 50 },
        { name: "Bench Notice", value: 20 },
        { name: "Project Notice", value: 35 },
      ],
      feedback: { name: BUEnggDesignText, po: 267, neg: 48, neutral: 67 },
    },
  ];

  return (
    <CardContainer>
      <div className="grid grid-cols-2  gap-5">
        <div className="grid grid-cols-2  gap-5">
          <Card title={BUFintechText + " " + EmployeeTxt}>
            <PieChartActiveShape data={chartBuData[0].data} />
          </Card>
          <Card title={BUMediaText + " " + EmployeeTxt}>
            <PieChartActiveShape data={chartBuData[1].data} />
          </Card>
          <Card title={BUPLMText + " " + EmployeeTxt}>
            <PieChartActiveShape data={chartBuData[2].data} />
          </Card>
          <Card title={BUEnggDesignText + " " + EmployeeTxt}>
            <PieChartActiveShape data={chartBuData[3].data} />
          </Card>
        </div>
        <div className="grid gap-5">
          <Card title={"Annual Internal Satisfaction Survey"}>
            <div className="my-10"></div>
            <BiaxialBarChart
              data={[
                chartBuData[0].feedback,
                chartBuData[1].feedback,
                chartBuData[2].feedback,
                chartBuData[3].feedback,
              ]}
            />
          </Card>
        </div>
      </div>
    </CardContainer>
  );
};

export default ChartContainer;
