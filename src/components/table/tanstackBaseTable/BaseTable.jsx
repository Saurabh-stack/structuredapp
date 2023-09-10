import React, { useState, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getExpandedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { classNames } from "../../../utilities/classNames";
import Button from "../../atoms/Button.component";
import ASimpleTable from "./ASimpleTable";
import ColumnHeader from "./ColumnHeader";
import DataRows from "./DataRows";
import Pagination from "./Pagination";

const BaseTable = ({
  columns,
  defaultData,
  className,
  fnFetchData,
  getRowCanExpand,
  renderSubComponent,
}) => {
  const rerender = useReducer(() => ({}), {})[1];
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };

  //console.log("fnFetchData::", fnFetchData(fetchDataOptions));

  const dataQuery = useQuery({
    queryKey: ["data", fetchDataOptions],
    queryFn: () => fnFetchData(fetchDataOptions),
  });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: dataQuery.data?.["rows"] ?? defaultData,
    columns,
    pageCount: dataQuery?.data?.["pageCount"] ?? -1,
    state: {
      pagination,
    },

    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    getRowCanExpand,
    getExpandedRowModel: getExpandedRowModel(),

    //getFilteredRowModel: getFilteredRowModel(),
    //getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
  });

  return (
    <div className="w-full">
      {dataQuery.isFetching || dataQuery.isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="mb-5">
            <Button onClick={() => rerender()}>Force Rerender</Button>
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
              renderSubComponent={renderSubComponent}
            ></DataRows>
          </ASimpleTable>
          <Pagination
            fnPreviousPage={table.previousPage}
            isPreviousPageEnable={!table.getCanPreviousPage()}
            fnNextPage={table.nextPage}
            isNextPageEnable={!table.getCanNextPage()}
            currPage={table.options.state}
            totalPage={table.getPageCount()}
            enableGoToPage={true}
            setPageIndex={table.setPageIndex}
            enablePageSize={true}
            availablePageSizes={[10, 20, 30, 40, 50]}
            setPageSize={table.setPageSize}
          />
        </>
      )}
    </div>
  );
};

export default BaseTable;
