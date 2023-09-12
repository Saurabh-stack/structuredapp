import { useDisclosure } from "@chakra-ui/react";
import Card from "../../../components/shared/card";
import Button from "../../../components/atoms/Button.component";
import ChakraModal from "../../../components/modal/ChakraModal";
import { Textarea } from "@chakra-ui/react";
import SimplePieChart from "../../../components/ReCharts/SimplePieChart";
const WorkBasic = ({ row, considerHandler, fnRejectHandler }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <div className="border-2 w-full my-5" />
            <div className="grid grid-cols-3 gap-2">
              <Card title={"Employment Info"}>
                <div className="flex flex-col my-2">
                  {row?.original?.employmentDetails?.map((obj) => (
                    <div className="grid grid-cols-2 gap-10">
                      <div className=" text-gray-400">{obj.title}</div>
                      <div className=" text-gray-400">{obj.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
              <Card title={"Profile Matching"}>
                <SimplePieChart
                  fullCircle
                  data={[
                    { name: "Matching", value: 10 },
                    { name: "Not Matching", value: 0 },
                  ]}
                />
              </Card>
              <Card title={"Probability of Joining"}>
                <SimplePieChart
                  fullCircle
                  data={[
                    { name: "Joining", value: 8 },
                    { name: "Not Joining", value: 2 },
                  ]}
                />
              </Card>
            </div>
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
        <Button onClick={onClose}>Reject Candidate</Button>
        <Button onClick={onOpen}>Send to Manager</Button>
      </div>
      {isOpen && (
        <ChakraModal
          onClose={onClose}
          isOpen={isOpen}
          isCentered={true}
          cancleBtnText={"Cancle"}
          confirmBtnText={"Confirm"}
          title={"Candidate Confirmation"}
          size={"xl"}
        >
          <Card title={"Summary"} className={"ml-4"}>
            <div className="flex flex-col my-2 w-full">
              <Textarea isInvalid placeholder="Here is a sample placeholder" />
            </div>
          </Card>
        </ChakraModal>
      )}
    </div>
  );
};

export default WorkBasic;
