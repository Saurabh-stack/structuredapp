import { classNames } from "../../../utilities/classNames";
const ColumnHeader = ({ headerGroups, flexRender, className }) => {
  return (
    <thead className={classNames(`bg-signature_light`, className)}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className="capitalize px-3.5 py-2">
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default ColumnHeader;
