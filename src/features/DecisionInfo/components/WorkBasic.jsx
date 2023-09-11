import React from "react";
import Card from "../../../components/shared/card";
import Button from "../../../components/atoms/Button.component";

const WorkBasic = ({ row, considerHandler, rejectHandler }) => {
  return (
    <div className="flex flex-col my-3 gap-y-3 w-full justify-between">
      <div className="flex flex-row w-full gap-2">
        <Card title={"Summary"} className={"ml-4"}>
          <div className="flex flex-col my-2">
            <ul>
              {row?.original?.summary?.map((value) => (
                <li>{value}</li>
              ))}
            </ul>
          </div>
        </Card>
        <Card title={"Work Profile"} className={"mr-4"}>
          <div className="flex flex-col my-2">
            {row?.original?.workProfile?.map((obj) => (
              <div className="grid grid-cols-2">
                <div className=" text-gray-400">Project - {obj.proj}</div>
                <div className=" text-gray-400">
                  <div>{obj.role}</div>
                  <div>{obj.techStack}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="flex flex-row w-full gap-3 justify-end">
        <Button onClick={rejectHandler}>Reject</Button>
        <Button onClick={considerHandler}>Consider</Button>
      </div>
    </div>
  );
};

export default WorkBasic;
