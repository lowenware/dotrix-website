import { BLOG_URL_ROOT } from "./blog";
import { DOCS_URL_ROOT } from "./docs";

export const HOME_URL_ROOT = "/";
export const COMMUNITY_URL_ROOT = "/community";


export type PageEnum = "HOME" | "BLOG" | "COMMUNITY" | "DOCS";
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
  "DOCS": {
    url: DOCS_URL_ROOT,
    menu: "Docs",
    title: "Handbook :: Dotrix 3D Engine"
  },
  "COMMUNITY": {
    url: COMMUNITY_URL_ROOT,
    menu: "Community",
    title: "Community :: Dotrix 3D Engine"
  },
}