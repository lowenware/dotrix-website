/* eslint-disable no-restricted-imports */
import ArrowLeft from "assets/arrow-left.svg";
import ArrowRight from "assets/arrow-right.svg";
import LogoDiscord from "assets/logo-discord.svg";
import LogoDotrix from "assets/logo-dotrix.svg";
import LogoGithub from "assets/logo-github.svg";
import LogoLowenware from "assets/logo-lowenware.svg";
import LogoPatreon from "assets/logo-patreon.svg";
import LogoTwitter from "assets/logo-twitter.svg";
import LogoYoutube from "assets/logo-youtube.svg";
import MenuIcon from "assets/menu-icon.svg";
/* eslint-enable no-restricted-imports */
import Image from "next/image";

export const Arrow = {
  Left: () => <Image src={ArrowLeft} alt="" />,
  Right: () => <Image src={ArrowRight} alt="" />,
};

export const Logo = {
  Discord: () => <Image src={LogoDiscord} alt="" />,
  Dotrix: () => <Image src={LogoDotrix} alt="" />,
  Github: () => <Image src={LogoGithub} alt="" />,
  Lowenware: () => <Image src={LogoLowenware} alt="" />,
  Patreon: () => <Image src={LogoPatreon} alt="" />,
  Twitter: () => <Image src={LogoTwitter} alt="" />,
  Youtube: () => <Image src={LogoYoutube} alt="" />,
};

export const Icon = {
  Menu: () => <Image src={MenuIcon} alt="" />,
};
