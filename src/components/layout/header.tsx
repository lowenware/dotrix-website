import classNames from "classnames";
import Link from "next/link";
import React, {useState} from "react";

import {Icon, Logo} from "~/assets";
import {HOME_URL_ROOT, PageEnum,PAGES} from "~/utils/pages";

interface HeaderProps {
  currentPage?: PageEnum,
}

export const Header: React.FC<HeaderProps> = ({currentPage}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    document.querySelector(".navbar")?.classList.toggle("active_menu");
    return;
  };
  return (
    <>
      <nav className="flex w-full px-32 h-80 justify-between bg-dark fixed z-50">
        <Link href={HOME_URL_ROOT}>
          <div className="flex items-center text-white
           duration-700 cursor-pointer">
            <span className="">
              <Logo.Dotrix />
            </span>
            <p className="hover:text-green duration-1000 ml-16 text-24 font-bold py-32 ">
              DOTRIX
            </p>
          </div>
        </Link>
        <div className="navbar flex">
          {Object.keys(PAGES)
            .map(id => ({...PAGES[id as PageEnum], id}))
            .map(page => (
              <Link key={page.id} href={page.url}>
                <span
                  id={page.id.toLowerCase()}
                  className={classNames(
                    "navbar-link cursor-pointer",
                    currentPage === page.id ? "active_link" : ""
                  )}
                >
                  {page.menu}
                </span>
              </Link>
            ))}
        </div>
        <button
          onClick={handleClick}
          id="menu"
          className="block sm:hidden"
        >
          <Icon.Menu />
        </button>
      </nav>
    </>
  );
};
