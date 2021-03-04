import IIcon from "./icon";
import ILink from "./link";

interface IDotrix {
  copyright: string,
  logo: IIcon,
  links: {
    get: ILink,
    donate: ILink,
    lowenware: ILink,
    community: {
      github: ILink,
      discord: ILink,
      linkedin: ILink,
      reddit: ILink,
      twitter: ILink,
      youtube: ILink,
    },
  }
}

const github: ILink = {
  title: "GitHub",
  href: "https://github.com/lowenware/dotrix",
  icon: {
    src: "/img/logos/github.svg",
    alt: "Github logo",
  },
};

const dotrix: IDotrix = {
  copyright: "© 2021 by Löwenware s.r.o.",
  logo: {
    src: "/img/logos/dotrix.svg",
    alt: "Dotrix logo",
  },
  links: {
    get: {
      title: "Get Dotrix",
      href: github.href,
    },
    donate: {
      title: "Donate",
      href: "https://github.com/sponsors/lowenware",
    },
    lowenware: {
      title: "Löwenware",
      href: "https://lowenware.com/",
      icon: {
        src: "/img/logos/lowenware.svg",
        alt: "Löwenware logo",
      },
    },
    community: {
      github,
      discord: {
        title: "Discord",
        href: "https://discord.gg/hnjGA3pfpc",
        icon: {
          src: "/img/logos/discord.svg",
          alt: "Discord logo",
        },
      },
      linkedin: {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/lowenware/",
        icon: {
          src: "/img/logos/linkedin.svg",
          alt: "LinkedIn logo",
        },
      },
      reddit: {
        title: "Reddit",
        icon: {
          src: "/img/logos/reddit.svg",
          alt: "Reddit logo",
        },
        href: "https://www.reddit.com/user/lowenware/",
      },
      twitter: {
        title: "Twitter",
        icon: {
          src: "/img/logos/twitter.svg",
          alt: "Twitter logo",
        },
        href: "https://twitter.com/lowenware",
      },
      youtube: {
        title: "Youtube",
        icon: {
          src: "/img/logos/youtube.svg",
          alt: "Youtube logo",
        },
        href: "https://www.youtube.com/channel/UCdriNXRizbBFQhqZefaw44A",
      },
    },
  }
};

export default dotrix;
