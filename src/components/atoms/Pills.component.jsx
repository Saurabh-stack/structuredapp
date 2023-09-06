import React from "react";

const Pills = ({ text }) => {
  return (
    <button className="rounded-full px-2 py-2 font-semibold transition duration-150 bg-red-300 hover:bg-red-700 text-red-900">
      {text}
    </button>
  );
};

export default Pills;
