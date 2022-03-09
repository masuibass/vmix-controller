import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import InputCard from "./InputCard/InputCard";

type Props = {};

const Inputs: React.FC<Props> = () => {
  const response = useSelector((state: RootState) => state.vmix.response);
  const inputs = response.vmix?.inputs.input;
  const active = response.vmix?.active;
  const preview = response.vmix?.preview;

  return (
    <div className="grid grid-cols-5">
      {inputs &&
        inputs.length > 0 &&
        inputs.map((input) => {
          const { number, key, ...rest } = input;
          return (
            <InputCard
              id={key}
              key={key}
              number={number}
              {...rest}
              isActive={parseInt(number) == active}
              isPreview={parseInt(number) == preview}
            />
          );
        })}
    </div>
  );
};

export default Inputs;
