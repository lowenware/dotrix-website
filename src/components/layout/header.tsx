import classNames from "classnames";
import React, {useState} from "react";

import {Icon, Logo} from "~/assets";
import {HOME_URL_ROOT, PageEnum, PAGES} from "~/utils/pages";

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
    <nav className="nav flex w-full px-24 h-80 justify-between bg-dark fixed z-50">
      <a href={HOME_URL_ROOT} className="flex items-center duration-700 space-x-16">
        <Logo.Dotrix /><span>Dotrix</span>
      </a>
      <div className="navbar flex">
        {Object.keys(PAGES)
          .map(id => ({...PAGES[id as PageEnum], id}))
          .map(page => (
            <a
              key={page.id}
              id={page.id.toLowerCase()}
              href={page.url}
              className={classNames(
                "navbar-link cursor-pointer",
                currentPage === page.id ? "active_link" : ""
              )}
            >
              {page.menu}
            </a>
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
  );
};
