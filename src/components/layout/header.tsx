import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import DotrixIcon from "src/icons/dotrix-icon.svg";
import Menu from "src/icons/menu.svg";

import { HOME_URL_ROOT, PageEnum,PAGES } from "~/utils/pages";

interface HeaderProps {
  currentPage: PageEnum,
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
        <Link href={HOME_URL_ROOT}>
          <div className="ml-32 flex items-center text-white duration-700 cursor-pointer">
            <span className="">
              <DotrixIcon className="" />
            </span>
            <p className="hover:text-green ml-16 text-24 font-bold py-32 ">
              DOTRIX
            </p>
          </div>
        </Link>
        <div className="navbar mr-32 flex">
          {Object.keys(PAGES)
            .map((id) => ({ ...PAGES[id as PageEnum], id }))
            .map((page) => (
              <Link key={page.id} href={page.url}>
                <a
                  id={page.id.toLowerCase()}
                  className={classNames(
                    "navbar-link",
                    currentPage === page.id ? "active_link" : ""
                  )}
                  href="#"
                >
                  {page.menu}
                </a>
              </Link>
            ))}
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
