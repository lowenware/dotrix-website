import Link from "next/link";
import DotrixIcon from "src/icons/dotrix-icon.svg";
import Bars from "src/icons/bars.svg";
import React, { useState, useEffect } from "react";
import Line from "src/icons/line_top.svg";
interface TopBarProps {
  isHome?: boolean;
  isCommunity?: boolean;
}
export const TopBar: React.FC<TopBarProps> = ({}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    document.querySelector(".trans_menu")?.classList.toggle("active_trans");
  };

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      document.querySelector(".home")?.classList.add("active_link");
      document.querySelector(".line")?.classList.add("active_line");
    }
    if (window.location.pathname.startsWith("/community")) {
      document.querySelector(".community")?.classList.add("active_link");
      document.querySelector(".line_community")?.classList.add("active_line");
    }
    if (window.location.pathname.startsWith("/news")) {
      document.querySelector(".news")?.classList.add("active_link");
      document.querySelector(".line_news")?.classList.add("active_line");
    }
    if (window.location.pathname.startsWith("/docs")) {
      document.querySelector(".docs")?.classList.add("active_link");
      document.querySelector(".line_docs")?.classList.add("active_line");
    }
  }, []);
  return (
    <>
      <nav className="h-80 flex justify-between bg-black w-full z-40 absolute">
        <Link href={"/"}>
          <div className="ml-32 flex items-center text-white hover:text-green duration-700 cursor-pointer">
            <DotrixIcon />
            <p className="ml-32 text-24 font-bold py-32 ">DOTRIX</p>
          </div>
        </Link>
        <ul className="hidden sm:flex items-center text-white">
          <li className="flex flex-col home text-20 px-16 uppercase font-bold hover:text-green transition duration-500">
            <Link href="/">Home</Link>
            <Line className="line self-center absolute top-0 scale-150" />
          </li>
          <li className="news flex flex-col px-16 text-20 uppercase font-bold hover:text-green transition duration-500">
            <Link href="/news">News</Link>
            <Line className="line_news line self-center absolute top-0 scale-150" />
          </li>
          <li className="docs flex flex-col px-16 text-20 uppercase font-bold hover:text-green transition duration-500">
            <Link href="/docs/index">DOCS</Link>
            <Line className="line line_docs self-center absolute top-0 scale-150" />
          </li>
          <li className="flex flex-col community px-16 text-20 mr-24 uppercase font-bold hover:text-green transition duration-500">
            <Link href="/community" className="">
              COMMUNITY
            </Link>
            <Line className="line line_community self-center absolute top-0 scale-150" />
          </li>
        </ul>

        <button className="sm:hidden block" onClick={handleClick}>
          <Bars className="mr-32 self-center fill-white cursor-pointer" />
        </button>
      </nav>

      <ul className="flex flex-col sm:hidden bg-black items-center text-white trans_menu">
        <li className="py-32 text-20 px-16 text-center uppercase font-bold hover:text-green transition duration-500">
          <Link href="/">Home</Link>
        </li>
        <li className="py-32 px-16 text-20 text-center uppercase font-bold hover:text-green transition duration-500">
          <Link href="/news">News</Link>
        </li>
        <li className="py-32 px-16 text-20 text-center uppercase font-bold hover:text-green transition duration-500">
          <Link href="/docs/Start/Hello">DOCS</Link>
        </li>
        <li className="py-32 px-16 text-20 text-center uppercase font-bold hover:text-green transition duration-500">
          <Link href="/community">COMMUNITY</Link>
        </li>
      </ul>
    </>
  );
};
