import Features from "src/components/index/features";
import Footer from "src/components/footer";
import Head from "next/head";
import Menu from "src/components/menu";
import React from "react";
import Technology from "src/components/index/technology";
import Welcome from "src/components/index/welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dotrix - 3D game engine</title>
      </Head>

      <Menu/>

      <Welcome/>
      <Technology/>
      <Features/>

      <Footer/>
    </>
  );
}
