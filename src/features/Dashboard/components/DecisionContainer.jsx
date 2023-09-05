import { useQuery } from "@tanstack/react-query";
import { SpinnerCircular } from "spinners-react";

import xhrClient from "../../../utilities/DataRequest";

import CardContainer from "../../../components/shared/card/CardContainer";
import Card from "../../../components/shared/card";
import Button from "../../../components/atoms/Button.component";
import { DecideTxt, TopDecisionTxt } from "../../../constants";

const DecisionContainer = () => {
  const queryDecisions = useQuery({
    queryKey: ["topDecisions"],
    queryFn: () => xhrClient.get("TopDecisions").then((res) => res?.data),
  });

  return (
    <CardContainer>
      <span className="text-2xl text-gray-300">{TopDecisionTxt}</span>
      {queryDecisions.isLoading && (
        <div className="grid gap-8 mt-5 mb-5 items-center justify-center text-xl">
          <SpinnerCircular size={65} thickness={195} color="teal" />
          Loading....
        </div>
      )}
      {queryDecisions.isError && (
        <div className="grid gap-8 mt-5 mb-5 items-center justify-center">
          Error..........
        </div>
      )}

      {queryDecisions.data && (
        <div className="grid grid-cols-4 gap-8 mt-5 mb-5">
          {queryDecisions.data.map((obj, index) => (
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
      )}
    </CardContainer>
  );
};

export default DecisionContainer;
