import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { USERS } from "../../../components/table/Data";
import DataTableWithPagination from "../../../components/table/DataTableWithPagination";
import Card from "../../../components/shared/card";
import CardContainer from "../../../components/shared/card/CardContainer";
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
          <DataTableWithPagination data={data} columns={columns} />
        </Card>
      </div>
    </CardContainer>
  );
};

export default EmployeeTableContainer;
