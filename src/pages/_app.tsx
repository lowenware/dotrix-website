import "~/globals.css";

import {AppProps} from "next/app";

const website = ({Component, pageProps}: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default website;
