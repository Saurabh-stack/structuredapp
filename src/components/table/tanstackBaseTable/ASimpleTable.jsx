import React from "react";
import { classNames } from "../../../utilities/classNames";
const ASimpleTable = ({ children, striped, className, ...rest }) => {
  return (
    <table className={classNames(``, className)} {...rest}>
      {children}
    </table>
  );
};

export default ASimpleTable;
