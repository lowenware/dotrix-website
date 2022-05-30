import Link from "next/link";

import {Logo} from "~/assets";

import {JoinUs} from "./join-us";

export const Footer: React.FC = () => {
  return (
    <div id="footer">
      <JoinUs />
      <div
        className="flex sm:flex-row flex-col text-white sm:h-140 min-h-min
      sm:justify-between items-center "
      >
        <div className="w-1/3 flex flex-col my-auto sm:order-1 sm:pl-32 md:text-left text-center">
          © 2022 Löwenware s.r.o. All rights reserved. <br />
        </div>

        <div
          className="w-1/3 sm:order-3 flex flex-col lg:flex-row sm:my-0
         lg:justify-end justify-center
          my-8 sm:pr-32 lg:text-left sm:text-right text-center"
        >
          <span>Build #{process.env.BUILD_ID}|</span>
          <Link href="/license"> License | </Link>
          <Link href={"/privacy"}> Privacy</Link>
        </div>

        <div className="w-1/3 flex items-center sm:order-2 justify-center my-16 sm:m-0">
          <Logo.Lowenware />
        </div>
      </div>
    </div>
  );
};
