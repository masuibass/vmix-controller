import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { mutateVMix } from "../../lib/api";

import {
  AiOutlinePause,
  AiOutlineBackward,
  AiFillCaretRight,
} from "react-icons/ai";

const Pause = React.memo(AiOutlinePause);
const Backward = React.memo(AiOutlineBackward);
const Play = React.memo(AiFillCaretRight);

export type InputCardBodyProps = {
  id: string;
  number: string;
  type: string;
  state: string;
  position: string;
  duration: string;
  loop: string;
  muted?: string;
  solo?: string;
  audiobusses?: string;
};

const InputCardBody: React.FC<InputCardBodyProps> = ({
  id,
  position,
  duration,
}) => {
  const address = useSelector((state: RootState) => state.vmix.address);
  const port = useSelector((state: RootState) => state.vmix.port);

  return (
    <div className="relative flex flex-col">
      <div>
        <button className="px-2 py-1 bg-gray-200 rounded-lg">Muted</button>
        Gain <input type="text" className="border" /> dB
      </div>
      <div>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">M</button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">A</button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">B</button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">C</button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">D</button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">E</button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">F</button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">G</button>
      </div>

      {parseInt(duration) > 0 && (
        <div>
          <input
            type="range"
            min={0}
            max={duration}
            step={1}
            value={position}
            onChange={(e) =>
              mutateVMix(
                address,
                port,
                `Function=SetPosition&Input=${id}&Value=${e.target.value}`
              )
            }
            className="w-full h-2 p-0 transition-all bg-gray-200 bg-no-repeat appearance-none cursor-pointer bg-gradient-to-r from-sky-500 to-sky-500"
            style={{
              backgroundSize: `${
                (parseFloat(position) / parseFloat(duration)) * 100
              }% 100%`,
            }}
          />
        </div>
      )}

      <div className="flex flex-row items-center self-start">
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">
          <Play />
        </button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">
          <Pause />
        </button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">
          <Backward />
        </button>
        <button className="px-2 py-1 mr-1 bg-gray-200 rounded">Loop</button>
      </div>
    </div>
  );
};

export default InputCardBody;
