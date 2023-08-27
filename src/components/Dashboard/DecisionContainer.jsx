import React from "react";
import Card from "../shared/card";
import Button from "../atoms/Button.component";
import { DecideTxt, TopDecisionTxt } from "../../constants";
import CardContainer from "../shared/card/CardContainer";
const DecisionContainer = () => {
  const cardData = [
    {
      title: "New Hiring Request",
      description: "New resource request for .net from PMG",
      dueDate: "18 Aug, 2023",
    },
    {
      title: "New Hiring Salary Negotiation",
      description:
        "5 Candidate cleared all rounds. Salary Negotiation is required.",
      dueDate: "27 Aug, 2023",
    },
    {
      title: "Annual Appraisal",
      description: "Discussion with Managers on annual appraisal",
      dueDate: "12 Aug, 2023",
    },
    {
      title: "BU Expenses",
      description: "BU expenses split with Managers and BU get together",
      dueDate: "10 Aug, 2023",
    },
  ];
  return (
    <CardContainer>
      <span className="text-2xl text-gray-300">{TopDecisionTxt}</span>
      <div className="grid grid-cols-2 gap-8">
        {cardData.map((obj, index) => (
          <Card title={obj.title} key={index}>
            <div className="flex flex-col my-3">
              <div className="my-1 text-gray-400">{obj.description}</div>
              <div className="flex flex-row my-1 justify-between">
                <div className="text-gray-400">
                  Due Date:{" "}
                  <span className="text-gray-200">{obj.dueDate} </span>
                </div>

                <Button> {DecideTxt} </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </CardContainer>
  );
};

export default DecisionContainer;
