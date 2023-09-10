import { classNames } from "../../../utilities/classNames";
const ColumnHeader = ({ headerGroups, flexRender, className }) => {
  return (
    <thead className={classNames(`bg-signature_light`, className)}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              className="capitalize px-3.5 py-2"
            >
              {header.isPlaceholder ? null : (
                <div>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getCanFilter() ? (
                    <div>
                      {/*<Filter column={header.column} table={table} />*/}
                    </div>
                  ) : null}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default ColumnHeader;
