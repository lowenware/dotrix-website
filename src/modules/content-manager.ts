import fs from "fs";
import matter from "gray-matter";
import path from "path";

import cfg from "~/modules/config";

export interface StaticPageMeta {
  slug: string,
  url: string,
  title: string,
  menu: string,
  order: number,
}

export interface SocialMeta {
  slug: string,
  title: string,
  label: string,
  url: string,
  action: string,
  order: number,
  content: string,
}

export interface StaticPage {
  meta: StaticPageMeta,
  content: string,
}

export interface PageProps<T> {
  menu: StaticPageMeta[],
  social: SocialMeta[],
  data: T,
}

export class ContentManager {
  private social: SocialMeta[];
  private pages: StaticPageMeta[];
  private metaFields = ["title"];

  static root(menu: StaticPageMeta[], slug: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return menu.find(l => l.slug === slug)!;
  };

  constructor(
    private root: string = cfg.content.root,
    private extension: string = cfg.content.extension
  ) {
    this.pages = this.getPages();
    this.social = this.getSocial(
      path.join(cfg.content.root, cfg.community.slug)
    );
  }


  page(slug: string): StaticPageMeta {
    return this.getStaticPage(slug).meta;
  }

  getPageProps<T>(data: T): PageProps<T> {
    return {
      menu: this.pages.filter(p => !!p.menu),
      social: this.social,
      data,
    };
  }

  getStaticPaths() {
    return this.pages.filter(page => !page.menu).map(page => ({
      params: {
        static: page.slug,
      },
    }));
  }

  private getPages(): StaticPageMeta[] {
    return fs
      .readdirSync(this.root)
      .filter(fileName => fileName.endsWith(this.extension))
      .map(fileName => this.readPage(fileName).meta)
      .sort((p1, p2) => p1.order - p2.order);
  }

  private getSocial(root: string): SocialMeta[] {
    return fs
      .readdirSync(root)
      .filter(fileName => fileName.endsWith(this.extension))
      .map(fileName => this.readSocial(root, fileName))
      .sort((p1, p2) => p1.order - p2.order);
  }

  getStaticPage(slug: string): StaticPage {
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

    const {title, menu, url} = data;
    const order = parseInt(data.order);
    const slug = fileName.replace(this.extension, "");

    return {
      meta: {
        slug,
        title,
        menu: menu || null,
        url: url || `/${slug}`,
        order: isNaN(order) ? 0 : order,
      },
      content: this.preprocess(content),
    };
  }

  private readSocial(root: string, fileName: string): SocialMeta {
    const filePath = path.join(root, fileName);
    const {data, content} = matter(fs.readFileSync(filePath, "utf-8"));

    ["title", "label", "url", "action", "order"].forEach(field => {
      if (!data[field]) {
        throw `File '${filePath}' has not '${field}' meta data`;
      }
    });

    const {title, label, url, action} = data;
    const order = parseInt(data.order);
    const slug = fileName.replace(this.extension, "");

    return {
      slug,
      title,
      label,
      url,
      action,
      order: isNaN(order) ? 0 : order,

      content,
    };
  }

  private preprocess(content: string) {
    return content;
  }
}
