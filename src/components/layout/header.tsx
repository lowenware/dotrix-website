import classNames from "classnames";
import Link from "next/link";
import React, {useState} from "react";

import {Icon, Logo} from "~/assets";
import {site} from "~/config";
import {StaticPageMeta} from "~/modules/content-manager";

interface HeaderProps {
  slug: string,
  menu: StaticPageMeta[],
}

export const Header: React.FC<HeaderProps> = ({slug, menu}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <nav className="nav flex justify-between items-stretch fixed w-full bg-dark drop-shadow
      px-24 h-80 z-50"
    >
      <a
        href={menu[0].url}
        className="flex items-center space-x-16"
      >
        <Logo.Dotrix />
        <span>Dotrix</span>
      </a>
      <ul className={
        classNames(
          "flex flex-col items-center space-x-0 space-y-24 absolute p-24 transition",
          "-translate-y-full bg-dark z-40 w-full left-0",
          open ? "drop-shadow top-80  translate-y-0" : undefined,
          "sm:flex-row sm:static sm:translate-y-0 sm:p-0 sm:space-x-24 sm:space-y-0",
          "sm:top-auto sm:left-auto sm:w-auto",
        )
      }>
        {menu
          .map(link => (
            <li
              key={link.slug}
              className={link.slug === site.home.slug ? "block sm:hidden md:block" : undefined}
            >
              <Link href={link.url}>
                <a className={slug === link.slug ? "active" : undefined}>{link.menu}</a>
              </Link>
            </li>
          ))}
      </ul>
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
