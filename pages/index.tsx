import type { NextPage } from "next";
import Head from "next/head";

import Init from "../components/Init";
import Monitor from "../components/Monitor";
import Inputs from "../components/Inputs";

const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen">
      <Head>
        <title>vMix Controller</title>
        <meta name="description" content="vMix controller on the web!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex flex-col items-center mx-auto">
        <Monitor />
        <Init />
        <Inputs />
      </div>
    </div>
  );
};

export default Home;
