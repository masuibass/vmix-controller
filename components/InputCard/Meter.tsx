import React from "react";

type MeterProps = {
  level: number;
  muted?: boolean;
};

const Meter: React.FC<MeterProps> = ({ level, muted }) => {
  const meter = Math.sqrt(Math.sqrt(level));

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-1 h-1 rounded-sm transition-all ${
          meter >= 1 ? `bg-red-500` : `bg-gray-200`
        }`}
      />
      <div className="relative w-1 h-48 overflow-hidden bg-gray-200 rounded">
        <div
          style={{ height: `${Math.min(0.35, meter) * 100}%` }}
          className={`absolute bottom-0 left-0 z-40 w-1 transition-all ${
            muted ? "bg-gray-600" : "bg-green-700"
          }`}
        />
        <div
          style={{ height: `${Math.min(0.59, meter) * 100}%` }}
          className={`absolute bottom-0 left-0 z-30 w-1 transition-all ${
            muted ? "bg-gray-500" : "bg-green-600"
          }`}
        />
        <div
          style={{ height: `${Math.min(0.84, meter) * 100}%` }}
          className={`absolute bottom-0 left-0 z-20 w-1 transition-all ${
            muted ? "bg-gray-400" : "bg-green-500"
          }`}
        />
        <div
          style={{ height: `${Math.min(1, meter) * 100}%` }}
          className={`absolute bottom-0 left-0 z-10 w-1 transition-all ${
            muted ? "bg-gray-300" : "bg-yellow-500"
          }`}
        />
      </div>
    </div>
  );
};

export default Meter;
