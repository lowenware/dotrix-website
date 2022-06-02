import fs from "fs";
import matter from "gray-matter";
import path from "path";

import {site} from "~/config";

export interface HandbookMeta {
  slug: string[],
  title: string,
  order: number,
}

export interface HandbookPage {
  meta: HandbookMeta,
  content: string,
}

export interface HandbookChapter {
  meta: HandbookMeta,
  sections: HandbookMeta[],
}

export interface HandbookProps {
  chapters: HandbookChapter[],
  page: HandbookPage,
  prev: HandbookMeta | null,
  next: HandbookMeta | null,
}

export class Handbook {
  private pages: HandbookChapter[];
  private metaFields = ["title"];

  constructor(
    private root: string = path.join(site.content.root, site.handbook.slug),
    private extension: string = site.content.extension,
  ) {
    this.pages = this.getPages();
  }

  getStaticPaths() {
    const paths = this.pages.flatMap(page => [
      {
        params: {
          slug: page.meta.slug,
        },
      },
      ...page.sections.map(section => ({
        params: {
          slug: section.slug,
        },
      })),
    ]);
    paths.push({
      params: {
        slug: [],
      },
    });
    return paths;
  }

  getStaticProps(slug: string[]): HandbookProps {
    const path = slug.join(".");
    const flat = this.pages.flatMap(p => [
      p.meta,
      ...p.sections.map(s => ({...s, title: `${p.meta.title}: ${s.title}`}))
    ]);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = flat.findIndex(p => p.slug.join(".") === path)!;

    let prev = null,
      next = null;

    if (index > 0) {
      prev = flat[index - 1];
    }
    if (index < flat.length - 1) {
      next = flat[index + 1];
    }
    return {
      chapters: this.pages,
      page: this.getPage(slug),
      prev,
      next,
    };
  }

  private getPage(slug: string[]): HandbookPage {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const chapter = this.pages.find(
      chapter => chapter.meta.slug[0] === slug[0]
    )!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const order = slug.length === 2 ? chapter.sections.find(
      section => section.slug[1] === slug[1]
    )!.order : chapter.meta.order;
    const page = slug.pop();
    return this.readPage([...slug, `${String(order).padStart(2, "0")}_${page}${this.extension}`]);
  }

  private getPages(): HandbookChapter[] {
    return this.readFolder([]).map(meta => ({
      meta,
      sections: this.readFolder(meta.slug),
    }));
  }

  private readFolder(paths: string[]): HandbookMeta[] {
    const folder = path.join(this.root, ...paths);

    if (!fs.existsSync(folder) || !fs.lstatSync(folder).isDirectory()) {
      return [];
    }

    return fs
      .readdirSync(folder)
      .filter(fileName => fileName.endsWith(this.extension))
      .map(fileName => this.readPage([...paths, fileName]).meta)
      .sort((p1, p2) => p1.order - p2.order);
  }

  private readPage(paths: string[]): HandbookPage {
    const filePath = path.join(this.root, ...paths);
    const {data, content} = matter(fs.readFileSync(filePath, "utf-8"));
    this.metaFields.forEach(field => {
      if (!data[field]) {
        throw `File '${filePath}' has not '${field}' meta data`;
      }
    });
    const {title} = data;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [order, slug] = paths.pop()!.split("_", 2);

    return {
      meta: {
        slug: [...paths, slug.replace(this.extension, "")],
        title,
        order: parseInt(order),
      },
      content: this.preprocess(content),
    };
  }

  private preprocess(content: string) {
    // TODO: implement preprocess routines here
    return content;
  }
}
