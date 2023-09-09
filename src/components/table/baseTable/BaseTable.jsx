import { useTable, useFilters, useSortBy } from "react-table";
import ASimpleTable from "./ASimpleTable";
import ColumnHeader from "./ColumnHeader";
import DataRows from "./DataRows";

const BaseTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <ASimpleTable>
      <ColumnHeader
        getTableProps={getTableProps}
        headerGroups={headerGroups}
      ></ColumnHeader>
      <DataRows
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      ></DataRows>
    </ASimpleTable>
  );
};

export default BaseTable;
