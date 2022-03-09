import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialResponse } from "./initialResponse";

export interface VMixState {
  connection: boolean;
  address: string;
  port: number;
  response: {
    vmix?: {
      version: string;
      edition: string;
      preset: string;
      inputs: {
        input: {
          "#text": string;
          key: string;
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
        }[];
      };
      overlays: {
        overlay: {
          number: string;
        }[];
      };
      preview: number;
      active: number;
      fadeToBlack: string;
      transitions: {
        transition: {
          number: string;
          effect: string;
          duration: string;
        }[];
      };
      recording: string;
      external: string;
      streaming: string;
      playList: string;
      multiCorder: string;
      fullscreen: string;
      audio: {
        master: {
          volume: string;
          muted: string;
          meterF1: string;
          meterF2: string;
          headphonesVolume: string;
        };
      };
      dynamic: {
        input1: string;
        input2: string;
        input3: string;
        input4: string;
        value1: string;
        value2: string;
        value3: string;
        value4: string;
      };
    };
  };
  error: any;
}

const initialState: VMixState = {
  connection: false,
  address: "",
  port: 8088,
  response: initialResponse,
  error: null,
};

interface ConnectActionPayload {
  address: string;
  port: number;
}

interface DisconnectActionPayload {
  error: any;
}

export const vmixSlice = createSlice({
  name: "vmix",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<object>) => {
      state.response = action.payload;
    },
    connect: (state, action: PayloadAction<ConnectActionPayload>) => {
      state.connection = true;
      state.address = action.payload.address;
      state.port = action.payload.port;
    },
    disconnect: (state, action: PayloadAction<DisconnectActionPayload>) => {
      state.connection = false;
      state.address = "";
      state.port = 8088;
      if (action.payload.error) state.error = action.payload.error;
    },
  },
});

export const { set, connect, disconnect } = vmixSlice.actions;

export default vmixSlice.reducer;
