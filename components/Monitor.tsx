import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

type Props = {};

const Monitor = (props: Props) => {
  const response = useSelector((state: RootState) => state.vmix.response);

  return (
    <div className="text-xs border shadow-lg rounded-lg py-2 px-4 absolute top-2 right-2">
      <pre>{response && JSON.stringify(response, null, "\t")}</pre>
    </div>
  );
};

export default Monitor;
