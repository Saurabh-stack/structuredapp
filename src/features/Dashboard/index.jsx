import React, { useEffect } from "react";
import DecisionContainer from "./components/DecisionContainer";
import ChartContainer from "./components/ChartContainer";

const Dashboard = () => {
  useEffect(() => {
    console.log("UseEffect called....");
    return () => {
      console.log("cleanup called.....");
    };
  });
  return (
    <>
      <DecisionContainer />
      <ChartContainer />
    </>
  );
};

export default Dashboard;
