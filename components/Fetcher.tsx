import React, { useEffect } from "react";
import useSWR from "swr";

import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";

import { fetchVMix, xmlParser } from "../lib/api";
import { set, disconnect } from "../features/vmixSlice";

type Props = {};

const Fetcher: React.FC<Props> = () => {
  const { connection, address, port } = useSelector(
    (state: RootState) => state.vmix
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetcher = async () => {
      try {
        const xml = await fetchVMix(address, port);
        const json = xmlParser.parse(xml);
        dispatch(set(json));
      } catch (error) {
        dispatch(disconnect({ error }));
      }
    };

    let interval: NodeJS.Timer | undefined;
    if (connection) {
      (async () => {
        try {
          await fetchVMix(address, port);
          interval = setInterval(fetcher, 100);
        } catch (error) {
          dispatch(disconnect({ error }));
        }
      })();
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [connection, address, port, dispatch]);

  return <></>;
};

export default Fetcher;
