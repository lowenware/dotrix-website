import Link from "next/link";
import DotrixIcon from "src/icons/dotrix-icon.svg";
import Menu from "src/icons/menu.svg";
import React, { useState } from "react";
import classNames from "classnames";

interface HeaderProps {
  currentPage: string;
}
export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    document.querySelector(".navbar")?.classList.toggle("active_menu");
    return;
  };
  return (
    <>
      <nav className="h-80 flex justify-between bg-black w-full z-40 absolute">
        <Link href={"/"}>
          <div className="ml-32 flex items-center text-white hover:text-green duration-700 cursor-pointer">
            <DotrixIcon />
            <p className="ml-32 text-24 font-bold py-32 ">DOTRIX</p>
          </div>
        </Link>
        <div className="navbar mr-32 flex">
          <Link href="/">
            <a
              id="home"
              className={classNames(
                "navbar-link",
                currentPage === "Home" ? "active_link" : ""
              )}
              href="#"
            >
              Home
            </a>
          </Link>
          <Link href="/news">
            <a
              id="news"
              className={classNames(
                "navbar-link",
                currentPage === "News" ? "active_link" : ""
              )}
              href="#"
            >
              News
            </a>
          </Link>
          <Link href="/docs/index">
            <a
              id="docs"
              className={classNames(
                "navbar-link",
                currentPage === "Docs" ? "active_link" : ""
              )}
              href="#"
            >
              DOCS
            </a>
          </Link>
          <Link href="/community">
            <a
              id="community"
              className={classNames(
                "navbar-link",
                currentPage === "Community" ? "active_link" : ""
              )}
              href="#"
            >
              COMMUNITY
            </a>
          </Link>
        </div>
        <button
          onClick={handleClick}
          id="menu"
          className="block sm:hidden mr-32"
        >
          <Menu />
        </button>
      </nav>
    </>
  );
};
{
  /* <ul className="hidden sm:flex items-center text-white">
          <li className="flex flex-col home text-20 px-16 uppercase font-bold hover:text-green transition duration-500">
            <Link href="/">Home</Link>
          </li>
          <li className="news flex flex-col px-16 text-20 uppercase font-bold hover:text-green transition duration-500">
            <Link href="/news">News</Link>
          </li>
          <li className="docs flex flex-col px-16 text-20 uppercase font-bold hover:text-green transition duration-500">
            <Link href="/docs/index">DOCS</Link>
          </li>
          <li className="flex flex-col community px-16 text-20 mr-24 uppercase font-bold hover:text-green transition duration-500">
            <Link href="/community" className="">
              COMMUNITY
            </Link>
          </li>
        </ul>

        <button className="sm:hidden block" onClick={handleClick}>
          <Menu className="mr-32 self-center fill-white cursor-pointer" />
        </button>
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
      </ul> */
}
