import React, { useState } from "react";
import CardContainer from "../../../components/shared/card/CardContainer";
import Card from "../../../components/shared/card";
import InfoCard from "../../../components/shared/card/InfoCard";
import Pills from "../../../components/atoms/Pills.component";
import PieChartActiveShape from "../../../components/ReCharts/PieChartActiveShape";
import xhrClient from "../../../utilities/DataRequest";
import { useQuery } from "@tanstack/react-query";
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

  return (
    <CardContainer customClass={`border-0`}>
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-4 gap-8 mt-5 mb-5">
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
          <InfoCard
            title={"Manager and Business Info"}
            id={1}
            description={<BusinessInfo />}
            pill={<Pills text={"Critical"} />}
          />
        </div>
        <div className="grid gap-8 mt-5 mb-5">
          {showTable && (
            <CardContainer>
              <div className="grid grid-cols-4 mx-0 my-0">
                <div className="grid col-span-3">
                  1. Id 2. EmployeeName 3. Skills 4. Availabile(days) 5.
                  Matching percentage 6. Actions (Download, Reject, Verify)
                </div>
                <div className="grid">
                  <Card>
                    <PieChartActiveShape
                      data={buwiseempoccupancy.data[0].data}
                    />
                  </Card>
                </div>
              </div>
            </CardContainer>
          )}
        </div>
      </div>
    </CardContainer>
  );
};

export default NewHieringDetails;
