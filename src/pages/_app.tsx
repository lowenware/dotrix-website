/* This page will configure global CSS styles and shared code between pages
 * for more info please visit:
 * https://nextjs.org/docs/advanced-features/custom-app
 * https://nextjs.org/docs/basic-features/typescript#custom-app
 */

import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";

import GlobalClassesStyle from "src/styles/globalClasses";
import GlobalMainStyle from "src/styles/globalMain";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // TODO: check if it works properly when add more pages - maybe event needs to be unregistered
  useEffect(() => {
    doScroll("auto");
    window.onhashchange = () => {
      scrollToHash(window.location.hash, "auto");
    };
    router.events.on("hashChangeComplete", () => {
      doScroll("smooth");
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalMainStyle />
      <GlobalClassesStyle />
      <Component {...pageProps} />
    </>
  );
}

function doScroll(behavior: "auto" | "smooth") {
  const hash = window.location.hash;
  if (hash) {
    scrollToHash(hash, behavior);
  } else {
    scroll({ left: 0, top: 0, behavior });
  }
}

function scrollToHash(hash: string, behavior: "auto" | "smooth") {
  if (hash) {
    const element = document.getElementById(hash);
    if (element) {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const yOffset = navbar.getBoundingClientRect().height;
        scrollIntoViewOffset(element, -yOffset, behavior);
      } else {
        element.scrollIntoView({ behavior });
      }
    }
  }
}

function scrollIntoViewOffset(element: HTMLElement, yOffset: number, behavior: "auto" | "smooth") {
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior });
}
