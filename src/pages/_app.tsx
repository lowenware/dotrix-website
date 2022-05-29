import "~/globals.css";

import {AppProps} from "next/app";
import Head from "next/head";

const website = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <title>PAGES.HOME.title</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default website;
