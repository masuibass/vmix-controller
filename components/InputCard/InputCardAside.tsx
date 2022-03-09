import React from "react";

import Volume from "./Volume";
import Meter from "./Meter";

export type InputCardAsideProps = {
  id: string;
  volume?: string;
  meterF1?: string;
  meterF2?: string;
  muted?: string;
};

const InputCardAside: React.FC<InputCardAsideProps> = ({
  id,
  volume,
  meterF1,
  meterF2,
  muted,
}) => (
  <div className="flex flex-row">
    {volume && <Volume id={id} volume={volume} />}
    {meterF1 && <Meter level={parseFloat(meterF1)} muted={muted === "True"} />}
    {meterF2 && <Meter level={parseFloat(meterF2)} muted={muted === "True"} />}
  </div>
);

export default InputCardAside;
