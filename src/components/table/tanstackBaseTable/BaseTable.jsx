import React, { useReducer } from "react";
//import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { classNames } from "../../../utilities/classNames";
import ASimpleTable from "./ASimpleTable";
import ColumnHeader from "./ColumnHeader";
import DataRows from "./DataRows";
import Pagination from "./Pagination";

const BaseTable = ({ columns, defaultData, className }) => {
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data: defaultData,
    columns,
    pageCount: 1,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
  });

  return (
    <div className="w-full">
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <ASimpleTable className={classNames(``, className)}>
        <ColumnHeader
          headerGroups={table.getHeaderGroups()}
          flexRender={flexRender}
          className="bg-signature_light"
        ></ColumnHeader>
        <DataRows
          rowModel={table.getRowModel()}
          flexRender={flexRender}
        ></DataRows>
      </ASimpleTable>
      <Pagination
        fnPreviousPage={table.previousPage}
        isPreviousPageEnable={!table.getCanPreviousPage()}
        fnNextPage={table.nextPage}
        isNextPageEnable={!table.getCanNextPage()}
        currPage={table.getState().pagination.pageIndex}
        totalPage={table.getPageCount()}
        enableGoToPage={true}
        setPageIndex={table.setPageIndex}
        enablePageSize={true}
        availablePageSizes={[10, 20, 30, 40, 50]}
        setPageSize={table.setPageSize}
      />
    </div>
  );
};

export default BaseTable;
