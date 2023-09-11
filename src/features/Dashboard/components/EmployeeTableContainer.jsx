import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { USERS } from "../../../components/table/Data";
import Card from "../../../components/shared/card";
import CardContainer from "../../../components/shared/card/CardContainer";
import BaseTable from "../../../components/table/tanstackBaseTable/BaseTable";
const EmployeeTableContainer = () => {
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
      <div className="grid grid-cols-1 gap-8 mt-5 mb-5">
        <Card>
          <BaseTable
            columns={columns}
            fnFetchData={new Promise(() => data)}
            defaultData={data}
            className={`border border-gray-700 text-left w-full`}
          />
        </Card>
      </div>
    </CardContainer>
  );
};

export default EmployeeTableContainer;
