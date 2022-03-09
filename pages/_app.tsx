import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RootState, store } from "../app/store";
import { Provider, useDispatch, useSelector } from "react-redux";

import Fetcher from "../components/Fetcher";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Fetcher />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
