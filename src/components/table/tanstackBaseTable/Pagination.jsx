import React from "react";
//import { classNames } from "../../../utilities/classNames";
const Pagination = ({
  fnPreviousPage,
  isPreviousPageEnable,
  isNextPageEnable,
  fnNextPage,
  currPage,
  totalPage,
  enableGoToPage,
  setPageIndex,
  enablePageSize,
  availablePageSizes,
  setPageSize,
}) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <button
        onClick={() => {
          fnPreviousPage();
        }}
        disabled={isPreviousPageEnable}
        className="border rounded p-1 border-gray-300 px-2 disabled:opacity-30"
      >
        {"<"}
      </button>
      <button
        onClick={() => {
          fnNextPage();
        }}
        disabled={isNextPageEnable}
        className="p-1 border border-gray-300 px-2 disabled:opacity-30"
      >
        {">"}
      </button>

      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {currPage + 1} of {totalPage}
        </strong>
      </span>
      {enableGoToPage && (
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={currPage + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              setPageIndex(page);
            }}
            className="border p-1 rounded w-16 bg-transparent"
          />
        </span>
      )}
      {enablePageSize && (
        <select
          value={currPage}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-transparent"
        >
          {availablePageSizes.map((pageSize) => (
            <option
              key={pageSize}
              value={pageSize}
              className="bg-signature_light"
            >
              Show {pageSize}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Pagination;
