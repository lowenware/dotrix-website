import ArrowLeft from "assets/arrow-left.svg"
import ArrowRight from "assets/arrow-right.svg"
import LogoDiscord from "assets/logo-discord.svg"
import LogoDotrix from "assets/logo-dotrix.svg"
import LogoGithub from "assets/logo-github.svg"
import LogoLowenware from "assets/logo-lowenware.svg"
import LogoPatreon from "assets/logo-patreon.svg"
import LogoTwitter from "assets/logo-twitter.svg"
import LogoYoutube from "assets/logo-youtube.svg"
import MenuIcon from "assets/menu-icon.svg"

export const Arrow = {
  Left: () => <img src={ArrowLeft} />,
  Right: () => <img src={ArrowRight} />,
};

export const Logo = {
  Discord: () => <img src={LogoDiscord} />,
  Dotrix: () => <img src={LogoDotrix} />,
  Github: () => <img src={LogoGithub} />,
  Lowenware: () => <img src={LogoLowenware} />,
  Patreon: () => <img src={LogoPatreon} />,
  Twitter: () => <img src={LogoTwitter} />,
  Youtube: () => <img src={LogoYoutube} />,
};

export const Icon = {
  Menu: () => <img src={MenuIcon} />,
};
