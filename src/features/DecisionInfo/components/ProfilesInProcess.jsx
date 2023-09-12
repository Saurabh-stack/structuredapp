import React, { useEffect } from "react";
//import { useDisclosure } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import xhrClient from "../../../utilities/DataRequest";
import Pills from "../../../components/atoms/Pills.component";
import Card from "../../../components/shared/card";
import BaseTable from "../../../components/table/tanstackBaseTable/BaseTable";
import WorkBasic from "./WorkBasic";
import ChakraModal from "../../../components/modal/ChakraModal";

const ProfilesInProcess = ({ isOpen, onClose }) => {
  //const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log("ProfilesInProgress....");
  }, []);

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
    let api = "BenchEmployees"; //"inprocessforproject";

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
    return <WorkBasic row={row} />;
  };
  return (
    <ChakraModal
      onClose={onClose}
      isOpen={isOpen}
      isCentered={true}
      cancleBtnText={"Cancle"}
      confirmBtnText={"Confirm"}
      title={"Candidate In Process for Project Selection"}
      size={"xxl"}
    >
      <BaseTable
        columns={columns}
        fnFetchData={fetchData}
        renderSubComponent={renderSubComponent}
        getRowCanExpand={() => true}
        className={`border border-gray-700 text-left w-full`}
      />
    </ChakraModal>
  );
};

export default ProfilesInProcess;
