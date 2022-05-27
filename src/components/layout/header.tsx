import Link from "next/link";
import DotrixIcon from "src/icons/dotrix-icon.svg";
import Menu from "src/icons/menu.svg";
import React, { useState } from "react";
import classNames from "classnames";
import { PAGES, PageEnum, HOME_URL_ROOT } from "utils/pages";

interface HeaderProps {
  currentPage: PageEnum;
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
          <div className="ml-32 flex items-center text-white hover:text-green duration-700 cursor-pointer">
            <DotrixIcon />
            <p className="ml-32 text-24 font-bold py-32 ">DOTRIX</p>
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
