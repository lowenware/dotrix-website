import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const HANDBOOK_FILES_ROOT = "handbook";
export const HANDBOOK_URL_ROOT = "/handbook";
export const HANDBOOK_FILES_EXTENSION = ".md";

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
  menu: HandbookChapter[],
  page: HandbookPage,
}

export class Handbook {
  private pages: HandbookChapter[];
  private metaFields = ["title"];

  constructor(
    private root: string = HANDBOOK_FILES_ROOT,
    private url: string = HANDBOOK_URL_ROOT,
    private extension: string = HANDBOOK_FILES_EXTENSION
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
    return {
      menu: this.pages,
      page: this.getPage(slug),
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
