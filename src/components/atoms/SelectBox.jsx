import React from "react";

const SelectBox = ({
  label,
  name,
  children,
  suffix,
  prefix,
  errorMessage,
  disable,
  ...rest
}) => {
  return (
    <div className="relative mb-10">
      <div className="flex items-center">
        {label && (
          <label
            htmlFor={label}
            className="pr-5 uppercase font-normal h-8 text-sm translate-y-1/4"
          >
            {rest.label}
          </label>
        )}
        <select
          name={name}
          disabled={disable}
          {...rest}
          className={`block w-full font-normal h-8 text-sm px-2 transition duration-300 shadow-sm focus:outline-none rounded bg-gray-700 ring-gray-400 ring-1 text-text_light focust:ring-signature_green border-none
          ${suffix && "pr-6 pb-6"}
          ${prefix && "pl-6"}
          ${disable && "!cursor-not-allowed"}
          `}
        >
          {suffix && (
            <span className="absolute right-2 top-1/2 -translate-y-1/4">
              {suffix}
            </span>
          )}
          {children}
          {prefix && (
            <span className="absolute left-2 top-1/2 -translate-y-1/2">
              {prefix}
            </span>
          )}
        </select>
      </div>
      <div className="fixed mt-2 text-sm text-green-600 font-medium">
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
};

export default SelectBox;
