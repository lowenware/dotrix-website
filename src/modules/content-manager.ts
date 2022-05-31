import fs from "fs";
import matter from "gray-matter";
import path from "path";

import {BLOG_URL_ROOT} from "~/utils/blog";
import {HANDBOOK_URL_ROOT} from "~/utils/handbook";

export const HOME_URL_ROOT = "/";
export const COMMUNITY_URL_ROOT = "/community";

export const CONTENT_FILES_ROOT = "content";
export const CONTENT_FILES_EXTENSION = ".md";

export interface StaticPageMeta {
  slug: string,
  title: string,
}

export interface StaticPage {
  meta: StaticPageMeta,
  content: string,
}

export interface StaticPageProps {
  page: StaticPage,
}

export class ContentManager {
  private pages: StaticPageMeta[];
  private metaFields = ["title"];
  private menu = [
    {
      url: HOME_URL_ROOT,
      menu: "Home",
      title: "Dotrix 3D Engine",
    },
    {
      url: BLOG_URL_ROOT,
      menu: "Blog",
      title: "Blog of Dotrix 3D Engine",
    },
    {
      url: HANDBOOK_URL_ROOT,
      menu: "Handbook",
      title: "Handbook for Dotrix 3D Engine",
    },
    {
      url: COMMUNITY_URL_ROOT,
      menu: "Community",
      title: "Community of Dotrix 3D Engine",
    },
  ];

  constructor(
    private root: string = CONTENT_FILES_ROOT,
    private extension: string = CONTENT_FILES_EXTENSION
  ) {
    this.pages = this.getPages();
  }

  getMenu() {
    return this.menu;
  }

  getPageTitle(url: string) {
    return this.menu.find(i => i.url === url)?.title;
  }

  getStaticPaths() {
    return this.pages.map(page => ({
      params: {
        static: page.slug,
      },
    }));
  }

  getStaticProps(slug: string): StaticPageProps {
    return {
      page: this.getPage(slug),
    };
  }

  private getPages(): StaticPageMeta[] {
    return fs
      .readdirSync(this.root)
      .filter(fileName => fileName.endsWith(this.extension))
      .map(fileName => this.readPage(fileName).meta);
  }

  private getPage(slug: string): StaticPage {
    return this.readPage(`${slug}${this.extension}`);
  }

  private readPage(fileName: string): StaticPage {
    const filePath = path.join(this.root, fileName);
    const {data, content} = matter(fs.readFileSync(filePath, "utf-8"));

    this.metaFields.forEach(field => {
      if (!data[field]) {
        throw `File '${filePath}' has not '${field}' meta data`;
      }
    });

    const {title} = data;

    return {
      meta: {
        slug: fileName.replace(this.extension, ""),
        title,
      },
      content: this.preprocess(content),
    };
  }

  private preprocess(content: string) {
    return content;
  }
}
