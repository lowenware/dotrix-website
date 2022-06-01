import fs from "fs";
import matter from "gray-matter";
import path from "path";

import cfg from "~/modules/config";

export interface StaticPageMeta {
  slug: string,
  title: string,
  menu?: string,
  mod?: string,
  order: number,
}

export interface Page<T> {
  menu: StaticPageMeta[],
  data: T
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

  constructor(
    private root: string = cfg.content.folder,
    private extension: string = cfg.content.extension,
  ) {
    this.pages = this.getPages();
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

  getMenu(): StaticPageMeta[] {
    return this.pages.filter(p => !!p.menu);
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

    const {title, menu, mod } = data;
    const order = parseInt(data.order);

    return {
      meta: {
        slug: fileName.replace(this.extension, ""),
        title,
        menu,
        mod,
        order: isNaN(order) ? 0 : order, 
      },
      content: this.preprocess(content),
    };
  }

  private preprocess(content: string) {
    return content;
  }
}
