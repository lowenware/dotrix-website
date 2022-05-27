import { BLOG_URL_ROOT } from "./blog";
import { HANDBOOK_URL_ROOT } from "./handbook";

export const HOME_URL_ROOT = "/";
export const COMMUNITY_URL_ROOT = "/community";


export type PageEnum = "HOME" | "BLOG" | "COMMUNITY" | "HANDBOOK";
export const PAGES = {
  "HOME": {
    url: HOME_URL_ROOT,
    menu: "Home",
    title: "Dotrix 3D Engine"
  },
  "BLOG": {
    url: BLOG_URL_ROOT,
    menu: "Blog",
    title: "Blog :: Dotrix 3D Engine"
  },
  "HANDBOOK": {
    url: HANDBOOK_URL_ROOT,
    menu: "Handbook",
    title: "Handbook :: Dotrix 3D Engine"
  },
  "COMMUNITY": {
    url: COMMUNITY_URL_ROOT,
    menu: "Community",
    title: "Community :: Dotrix 3D Engine"
  },
}

export const getTitleForPage = (page: PageEnum) => {
  return PAGES[page].title
}
