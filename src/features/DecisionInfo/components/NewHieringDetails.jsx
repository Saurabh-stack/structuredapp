import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListIcon,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import { createColumnHelper } from "@tanstack/react-table";
import xhrClient from "../../../utilities/DataRequest";
import CardContainer from "../../../components/shared/card/CardContainer";
import Card from "../../../components/shared/card";
import InfoCard from "../../../components/shared/card/InfoCard";
import Pills from "../../../components/atoms/Pills.component";
import BaseTable from "../../../components/table/tanstackBaseTable/BaseTable";
import ProfileSummary from "./ProfileSummary";
import ProfilesInProcess from "./ProfilesInProcess";
import Button from "../../../components/atoms/Button.component";

const NewHieringDetails = () => {
  const [showTable, setShowTable] = useState(false);
  const [getTable, setTable] = useState(0);
  const [showInProgressProfiles, setShowInProgressProfiles] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleShowProfilesInProcess = () => {
    onOpen();
    setShowInProgressProfiles(true);
  };
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

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("status", {
      cell: (info) =>
        info.getValue() === "Consider" ? (
          <Pills text={"Considered"} type="success" disableClick />
        ) : info.getValue() === "Reject" ? (
          <Pills text={"Rejected"} type="error" disableClick />
        ) : (
          <></>
        ),
      header: () => null,
    }),
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
            {row.getIsExpanded() ? (
              <Pills text={"LESS"} type="less" isBadge />
            ) : (
              <Pills text={"MORE"} type="more" isBadge />
            )}
          </button>
        ) : (
          "🔵"
        );
      },
    },
  ];

  const fetchData = async (options) => {
    let api = "";
    if (getTable === 1) {
      api = "BenchEmployees";
    }
    const data = await xhrClient.get(api).then((res) => res?.data);
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
      <ProfileSummary
        row={row}
        proceedBtn={"Send to Manager"}
        cancelBtn={"Reject Candidate"}
      />
    );
  };
  return (
    <CardContainer customClass={`border-0`}>
      <Tabs variant="unstyled" align="start">
        <TabList>
          <Tab>
            <InfoCard
              className={"cursor-pointer"}
              title={"Bench Resources"}
              id={1}
              description={"15 bench resources with matching profile."}
              onClick={() => handleShowTable(1)}
            />
          </Tab>
          <Tab>
            <InfoCard
              className={"cursor-pointer"}
              title={"Notice Period Resources"}
              id={1}
              description={"15 bench resources with matching profile."}
              onClick={() => handleShowTable(2)}
            />
          </Tab>
          <Tab>
            <InfoCard
              className={"cursor-pointer"}
              title={"New Resources"}
              id={1}
              description={"15 bench resources with matching profile."}
              onClick={() => handleShowTable(3)}
            />
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="grid gap-8 mt-5 mb-5">
              {showTable && (
                <div className="grid grid-cols-4 mx-0 my-0">
                  <div className="grid col-span-3">
                    <Card>
                      <BaseTable
                        columns={columns}
                        fnFetchData={fetchData}
                        renderSubComponent={renderSubComponent}
                        getRowCanExpand={() => true}
                        className={`border border-gray-700 text-left w-full`}
                      />
                    </Card>
                  </div>
                  <Card className={`border-0 mx-2 w-full`} title={"Summary"}>
                    <div className="flex flex-col my-4 w-full gap-5">
                      <List spacing={5}>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="teal.500" />
                          Total 5 profile shared
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="teal.500" />
                          Total 3 are selected
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="teal.500" />
                          Total 2 joined the project
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdSettings} color="teal.500" />
                          Mimum 2 more profile need to share
                        </ListItem>
                      </List>
                      <Button
                        onClick={handleShowProfilesInProcess}
                        className={`font-bold`}
                      >
                        Show In Process Profiles
                      </Button>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/*
      <div className="flex flex-col">
        <div className="grid grid-cols-5 gap-8 mt-5 mb-5">
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
          <InfoCard
            className={"cursor-pointer"}
            title={"In Process Resources"}
            id={1}
            description={
              "Total 5 Resources are shared with Manager.\nClick here to see details"
            }
            onClick={handleShowProfilesInProcess}
          />
        </div>
        <div className="grid gap-8 mt-5 mb-5">
          {showTable && (
            <div className="grid grid-cols-4 mx-0 my-0">
              <div className="grid col-span-4">
                <Card>
                  <BaseTable
                    columns={columns}
                    fnFetchData={fetchData}
                    renderSubComponent={renderSubComponent}
                    getRowCanExpand={() => true}
                    enableForceRender
                    className={`border border-gray-700 text-left w-full`}
                  />
                  <Card className={`border-0 mx-4 my-14`}>
                    <div className="flex flex-col my-2 w-full">
                      <ul>
                        <li>Total 5 profile shared</li>
                        <li>Total 3 are selected</li>
                        <li>Total 2 joined the project</li>
                        <li>Mimum 2 more profile need to share</li>
                      </ul>
                    </div>
                  </Card>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
       */}
      {showInProgressProfiles && (
        <ProfilesInProcess onClose={onClose} isOpen={isOpen} />
      )}
    </CardContainer>
  );
};

export default NewHieringDetails;
