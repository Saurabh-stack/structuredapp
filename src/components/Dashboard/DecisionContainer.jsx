import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import Card from "../shared/card";
import Button from "../atoms/Button.component";
import { DecideTxt, TopDecisionTxt } from "../../constants";
import CardContainer from "../shared/card/CardContainer";
import { USERS } from "../table/Data";
import DataTableWithPagination from "../table/DataTableWithPagination";
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
  const [data] = useState(() => [...USERS]);
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("profile", {
      cell: (info) => info.getValue(),
      header: "Profile",
    }),
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => info.getValue(),
      header: "Last Name",
    }),
  ];

  return (
    <CardContainer>
      <span className="text-2xl text-gray-300">{TopDecisionTxt}</span>
      <div className="grid grid-cols-2 gap-8 mt-5 mb-5">
        <div className="grid grid-cols-2 gap-8 mt-5 mb-5">
          {cardData.map((obj, index) => (
            <Card title={obj.title} key={index}>
              <div className="flex flex-col my-3 w-full justify-between">
                <div className="my-1 text-gray-400">{obj.description}</div>
                <div className="flex my-1 justify-between items-center">
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
        <div className="grid grid-cols-1 gap-8 mt-5 mb-5">
          <Card>
            <DataTableWithPagination data={data} columns={columns} />
          </Card>
        </div>
      </div>
    </CardContainer>
  );
};

export default DecisionContainer;
