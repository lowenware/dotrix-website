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

/* eslint-disable @next/next/no-img-element */

export const Arrow = {
  Left: () => <img src={ArrowLeft} alt="Back" />,
  Right: () => <img src={ArrowRight} alt="Next" />,
};

export const Logo = {
  Discord: () => <img src={LogoDiscord} alt="Discord" />,
  Dotrix: () => <img src={LogoDotrix} alt="Dotrix" />,
  Github: () => <img src={LogoGithub} alt="GitHub" />,
  Lowenware: () => <img src={LogoLowenware} alt="Löwenware" />,
  Patreon: () => <img src={LogoPatreon} alt="Patreon" />,
  Twitter: () => <img src={LogoTwitter} alt="Twitter" />,
  Youtube: () => <img src={LogoYoutube} alt="YouTube" />,
};

export const Icon = {
  Menu: () => <img src={MenuIcon} alt="Menu" />,
};
