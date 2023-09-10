import React, { useState } from "react";
import CardContainer from "../../../components/shared/card/CardContainer";
import Card from "../../../components/shared/card";
import InfoCard from "../../../components/shared/card/InfoCard";
import Pills from "../../../components/atoms/Pills.component";
import PieChartActiveShape from "../../../components/ReCharts/PieChartActiveShape";
import xhrClient from "../../../utilities/DataRequest";
import { useQuery } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import BaseTable from "../../../components/table/tanstackBaseTable/BaseTable";
import WorkBasic from "./WorkBasic";
const NewHieringDetails = () => {
  const [showTable, setShowTable] = useState(false);
  const [getTable, setTable] = useState(0);
  const BusinessInfo = () => {
    return (
      <div>
        <div className="flex gap-5">
          <ul>
            <li>Project: Metro AI</li>
            <li>Manager: Ramjane</li>
          </ul>
          <ul>
            <li>Budget: 20LPA</li>
            <li>Expected Income: 60LPA</li>
          </ul>
        </div>
      </div>
    );
  };

  const handleShowTable = (tableId) => {
    if (getTable === tableId) setShowTable(!showTable);
    else {
      setShowTable(true);
      setTable(tableId);
    }
  };
  const buwiseempoccupancy = useQuery({
    queryKey: ["buwiseempoccupancy"],
    queryFn: () => xhrClient.get("buwiseempoccupancy").then((res) => res?.data),
  });

  const columnHelper = createColumnHelper();
  const columns = [
    {
      id: "expander",
      header: () => null,
      cell: ({ row }) => {
        return row.getCanExpand() ? (
          <button
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: "pointer" },
            }}
          >
            {row?.original?.status === "Consider" ? (
              <Pills text={"Consider"} />
            ) : row?.original?.status === "Reject" ? (
              <Pills text={"Rejected"} />
            ) : row.getIsExpanded() ? (
              "👇"
            ) : (
              "👉"
            )}
          </button>
        ) : (
          "🔵"
        );
      },
    },
    columnHelper.accessor("Designation", {
      cell: (info) => info.getValue(),
      header: "Designation",
    }),
    columnHelper.accessor("totalExp", {
      cell: (info) => info.getValue(),
      header: "Total Experience",
    }),
    columnHelper.accessor("fullName", {
      cell: (info) => info.getValue(),
      header: "Name",
    }),
    columnHelper.accessor("profile", {
      cell: (info) => info.getValue(),
      header: "Profile",
    }),
    columnHelper.accessor("availableFrom", {
      cell: (info) => info.getValue(),
      header: "Available From",
    }),
  ];

  const fetchData = async (options) => {
    const data = await xhrClient.get("BenchEmployees").then((res) => res?.data);
    console.log("data::", data);
    return {
      rows: data?.slice(
        options.pageIndex * options.pageSize,
        (options.pageIndex + 1) * options.pageSize
      ),
      pageCount: Math.ceil(30 / options.pageSize),
    };
  };

  const renderSubComponent = (row) => {
    return (
      <WorkBasic
        row={row}
        considerHandler={() => {
          alert("clicked");
        }}
        rejectHandler={() => {}}
      />
    );
  };

  return (
    <CardContainer customClass={`border-0`}>
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-4 gap-8 mt-5 mb-5">
          <InfoCard
            title={"Manager and Business Info"}
            id={1}
            description={<BusinessInfo />}
            pill={<Pills text={"Critical"} />}
          />
          <InfoCard
            className={"cursor-pointer"}
            title={"Bench Resources"}
            id={1}
            description={"15 bench resources with matching profile."}
            onClick={() => handleShowTable(1)}
          />
          <InfoCard
            className={"cursor-pointer"}
            title={"Notice Period Resources"}
            id={1}
            description={"15 bench resources with matching profile."}
            onClick={() => handleShowTable(2)}
          />
          <InfoCard
            className={"cursor-pointer"}
            title={"New Resources"}
            id={1}
            description={"15 bench resources with matching profile."}
            onClick={() => handleShowTable(3)}
          />
        </div>
        <div className="grid gap-8 mt-5 mb-5">
          {showTable && (
            <div className="grid grid-cols-4 mx-0 my-0">
              <div className="grid col-span-4">
                1. Id 2. EmployeeName 3. Skills 4. Availabile(days) 5. Matching
                percentage 6. Actions (Download, Reject, Verify)
                <Card>
                  <BaseTable
                    columns={columns}
                    fnFetchData={fetchData}
                    renderSubComponent={renderSubComponent}
                    getRowCanExpand={() => true}
                    className={`border border-gray-700 text-left w-full`}
                  />
                  <PieChartActiveShape data={buwiseempoccupancy.data[0].data} />
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </CardContainer>
  );
};

export default NewHieringDetails;
