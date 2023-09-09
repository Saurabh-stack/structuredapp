import React from "react";

const ASimpleTable = ({ children, striped, className, ...rest }) => {
  /**
   * Toggles the `striped` display variant. Darkened backgrounds for alternate rows.
   */
  if (striped) {
    //className += `a-simple-table--striped`;
  }

  return (
    <table {...rest} className={className}>
      {children}
    </table>
  );
};

export default ASimpleTable;
