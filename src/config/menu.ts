import ILink from "src/interfaces/link";

interface IMenu {
  links: {
    features: ILink,
    technology: ILink,
    docs: ILink,
    community: ILink,
  }
}

const menu: IMenu = {
  links: {
    features: {
      title: "Features",
      href: "/#features",
    },
    technology: {
      title: "Technology",
      href: "/#technology",
    },
    docs: {
      title: "Docs",
      href: "/#docs",
    },
    community: {
      title: "Community",
      href: "/#community",
    }
  }
};

export default menu;
