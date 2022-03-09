import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

type VolumeProps = {
  id: string;
  volume: string;
};

const Volume: React.FC<VolumeProps> = React.memo(function Volume({
  id,
  volume,
}) {
  const address = useSelector((state: RootState) => state.vmix.address);
  const port = useSelector((state: RootState) => state.vmix.port);

  const fader = Math.sqrt(Math.sqrt(parseFloat(volume) / 100.0)) * 100.0;

  return (
    <div className="flex flex-col items-center">
      <div className="h-1" />
      <div className="relative w-2 p-0 mx-2">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={fader}
          onChange={(e) =>
            fetch(
              `http://${address}:${port}/API?Function=SetVolume&Input=${id}&Value=${e.target.value}`
            )
          }
          className="absolute z-20 w-48 h-2 p-0 transition-all origin-top-left -rotate-90 translate-y-48 bg-gray-200 bg-no-repeat appearance-none cursor-pointer bg-gradient-to-r from-sky-500 to-sky-500"
          style={{ backgroundSize: `${fader}% 100%` }}
        />
      </div>
    </div>
  );
});

export default Volume;
