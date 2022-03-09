import React from "react";

import InputCardHeader from "./InputCardHeader";
import InputCardAside from "./InputCardAside";
import InputCardBody from "./InputCardBody";

export type InputProps = {
  id: string;
  number: string;
  type: string;
  title: string;
  shortTitle: string;
  state: string;
  position: string;
  duration: string;
  loop: string;
  muted?: string;
  volume?: string;
  balance?: string;
  solo?: string;
  audiobusses?: string;
  meterF1?: string;
  meterF2?: string;
  gainDb?: string;
  isActive: boolean;
  isPreview: boolean;
};

const InputCard: React.FC<InputProps> = React.memo(function InputCard({
  id,
  number,
  type,
  title,
  shortTitle,
  state,
  position,
  duration,
  loop,
  muted,
  volume,
  balance,
  solo,
  audiobusses,
  meterF1,
  meterF2,
  gainDb,
  isActive,
  isPreview,
}) {
  return (
    <div
      className={`relative px-4 py-2 text-xs rounded-lg shadow-xl border-4 ${
        isActive
          ? "border-red-500"
          : `${isPreview ? "border-green-500" : "border-gray-500"}`
      }`}
    >
      <InputCardHeader {...{ number, type, title, isActive, isPreview }} />

      <div className="flex flex-row">
        <InputCardBody
          {...{
            id,
            number,
            type,
            state,
            position,
            duration,
            loop,
            muted,
            solo,
            audiobusses,
          }}
        />
        <InputCardAside {...{ id, volume, meterF1, meterF2, muted }} />
      </div>
    </div>
  );
});

export default InputCard;
