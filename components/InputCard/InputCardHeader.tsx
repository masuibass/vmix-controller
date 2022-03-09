import React from "react";

export type InputCardHeaderProps = {
  number: string;
  type: string;
  title: string;
  isActive: boolean;
  isPreview: boolean;
};

const InputCardHeader: React.FC<InputCardHeaderProps> = ({
  number,
  type,
  title,
  isActive,
  isPreview,
}) => (
  <div className="flex flex-row items-center">
    <span
      className={`px-3 py-2 mr-1 text-sm font-bold rounded-lg ${
        isActive
          ? "bg-red-200"
          : `${isPreview ? "bg-green-200" : "bg-gray-200"}`
      }`}
    >
      {parseInt(number)}
    </span>
    <div className="flex flex-col items-start">
      <span className="mr-2 text-xs font-bold text-gray-600">{type}</span>
      <h3 className="text-xs truncate">{title}</h3>
    </div>
  </div>
);

export default InputCardHeader;
