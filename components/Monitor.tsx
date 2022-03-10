import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  AiFillCaretLeft as Left,
  AiFillCaretRight as Right,
} from "react-icons/ai";

type Props = {};

const Monitor = (props: Props) => {
  const [isShow, setShow] = useState(false);
  const response = useSelector((state: RootState) => state.vmix.response);

  return (
    <div
      className={`absolute px-4 py-2 text-xs border rounded-lg shadow-lg right-8 top-2 transition-all ${
        !isShow && "translate-x-full"
      }`}
    >
      <button
        className="absolute p-4 bg-white border rounded-l-full shadow-lg top-8 -left-8"
        onClick={() => setShow(!isShow)}
      >
        <Left className={`transition-all ${isShow && "rotate-180"}`} />
      </button>
      <pre>{response && JSON.stringify(response, null, "\t")}</pre>
    </div>
  );
};

export default Monitor;
