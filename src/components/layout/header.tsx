import Link from "next/link";
import React from "react";

import {Icon, Logo} from "~/assets";
import {StaticPageMeta} from "~/modules/content-manager";

interface HeaderProps {
  slug: string[],
  menu: StaticPageMeta[],
}

export const Header: React.FC<HeaderProps> = ({slug, menu}) => {
  const slugString = slug.join(".");

  //  const handleClick = () => {};

  return (
    <nav className="nav flex justify-between items-center fixed w-full bg-dark drop-shadow
      px-24 h-80 z-50"
    >
      <a href={menu[0].url} className="flex items-center space-x-16">
        <Logo.Dotrix /><span>Dotrix</span>
      </a>
      <ul className="flex space-x-24">
        {menu
          .map((link, i) => (
            <li key={i}>
              <Link href={link.url}>
                <a className={slugString === link.slug ? "active" : undefined}>{link.menu}</a>
              </Link>
            </li>
          ))}
      </ul>
      <button
        //        onClick={handleClick}
        id="menu"
        className="block sm:hidden"
      >
        <Icon.Menu />
      </button>
    </nav>
  );
};
