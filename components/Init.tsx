import React, { useState } from "react";
import { fetchVMix } from "../lib/api";

import { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { connect, disconnect } from "../features/vmixSlice";

type Props = {};

const Init: React.FC<Props> = ({}) => {
  const connection = useSelector((state: RootState) => state.vmix.connection);
  const dispatch = useDispatch();

  const [address, setAddress] = useState<string>("");
  const [port, setPort] = useState<number>(8088);

  const toggleConnection = async () => {
    if (connection) {
      dispatch(disconnect({ error: null }));
    } else {
      dispatch(connect({ address, port }));
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <div className="flex flex-row items-center justify-around">
        <div className="text-sm">
          <label>
            Address
            <input
              type="text"
              className="w-40 px-4 py-2 mx-2 text-sm border rounded-lg"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            Port
            <input
              type="text"
              className="w-16 px-2 py-2 mx-2 text-sm border rounded-lg"
              value={port}
              onChange={(e) => setPort(parseInt(e.target.value))}
              required
            />
          </label>
        </div>

        <div>
          <button
            className={`text-sm border rounded-lg py-2 px-4 transition-colors w-28 ${
              connection ? "bg-red-200" : "bg-green-200"
            }`}
            onClick={toggleConnection}
          >
            {connection ? "Disconnect" : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Init;
