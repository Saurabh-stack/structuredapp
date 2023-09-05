import React from "react";
import { useQuery } from "@tanstack/react-query";
import CardContainer from "../../../components/shared/card/CardContainer";
import Card from "../../../components/shared/card";
import PieChartActiveShape from "../../../components/ReCharts/PieChartActiveShape";
import BiaxialBarChart from "../../../components/ReCharts/BiaxialBarChart";
import xhrClient from "../../../utilities/DataRequest";
//import { SpinnerCircular } from "spinners-react";
const ChartContainer = () => {
  const buwiseempoccupancy = useQuery({
    queryKey: ["buwiseempoccupancy"],
    queryFn: () => xhrClient.get("buwiseempoccupancy").then((res) => res?.data),
  });

  const annualSurveyData = useQuery({
    queryKey: ["AnnualSurvey"],
    queryFn: () => xhrClient.get("AnnualSurvey").then((res) => res?.data),
  });

  return (
    <CardContainer>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid grid-cols-2 gap-5">
          {buwiseempoccupancy?.data?.map((obj) => (
            <Card title={obj.chartGroup} key={obj.chartGroup}>
              <PieChartActiveShape data={obj.data} />
            </Card>
          ))}
        </div>
        <div className="grid gap-5">
          <Card title={"Annual Internal Satisfaction Survey"}>
            <div className="my-10"></div>
            <BiaxialBarChart data={annualSurveyData?.data} />
          </Card>
        </div>
      </div>
    </CardContainer>
  );
};

export default ChartContainer;
