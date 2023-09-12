import React from "react";

const Pills = ({ isBadge, text, type, disableClick }) => {
  return (
    <button
      disabled={disableClick}
      className={`${
        isBadge ? "rounded" : "rounded-full"
      }  px-2 py-2 font-semibold transition duration-150 
    ${
      type === "error"
        ? "bg-red-300 hover:bg-red-700 text-red-900"
        : type === "success"
        ? "bg-green-300 hover:bg-green-600 text-green-800"
        : type === "more"
        ? "bg-teal-400 hover:bg-teal-600 text-teal-800"
        : type === "less"
        ? "bg-green-300 hover:bg-green-600 text-green-800"
        : "bg-red-300 hover:bg-red-700 text-red-900"
    }`}
    >
      {text}
    </button>
  );
};

export default Pills;
