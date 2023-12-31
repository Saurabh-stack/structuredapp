import React from "react";
const DataRows = ({ rowModel, flexRender, renderSubComponent }) => {
  return (
    <tbody>
      {rowModel && rowModel?.rows?.length ? (
        rowModel.rows.map((row, i) => (
          <>
            <tr
              key={row.id}
              className={` hover:bg-zinc-800
                ${i % 2 === 0 ? "bg-zinc-400" : "bg-zinc-600"}
                `}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3.5 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
            {row.getIsExpanded() && (
              <tr>
                {/* 2nd row is a custom 1 cell row */}
                <td colSpan={row.getVisibleCells().length}>
                  {renderSubComponent(row)}
                </td>
              </tr>
            )}
          </>
        ))
      ) : (
        <tr className="text-center h-32">
          <td colSpan={12}>No Recoard Found!</td>
        </tr>
      )}
    </tbody>
  );
};

export default DataRows;
