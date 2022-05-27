import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next/types";

const DOCS_FILES_ROOT = "docs"
export const DOCS_URL_ROOT = "/docs"
export const DOCS_FILES_EXTENSION = ".md";

export interface DocsItem {
  title: string;
  link: string;
  order:number
}
export interface DocsMenu{
  categories: DocsItem[];
  currentSection: DocsItem[] | null;
}
export interface DocsMeta {
  title: string;
  summary: string;
  date: string;
  tags: string
  image?: string;
}
export interface DocsPageProps {
  meta: DocsMeta;
  content: string; 
  menu: DocsMenu;
  category: string;  
  page: string;
}

export const getStaticCategoryPaths = async () => {
  const paths = fs
    .readdirSync(DOCS_FILES_ROOT)
    .filter((name) => name.endsWith(DOCS_FILES_EXTENSION))
    .map((name) => ({
      params: {
        category: name.replace(DOCS_FILES_EXTENSION, ""),
      },
    }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticSlugPaths = async () => {
  const paths = fs
    .readdirSync(DOCS_FILES_ROOT)
    .filter((name) => !name.endsWith(DOCS_FILES_EXTENSION))
    .flatMap((folder) =>
      fs.readdirSync(`${DOCS_FILES_ROOT}/${folder}`).map((name) => ({
        params: {
          category: folder,
          slug: name.replace(DOCS_FILES_EXTENSION, ""),
        },
      }))
    );
  return {
    paths,
    fallback: false,
  };
}

const getStructure = (fsRoot: string, urlRoot: string) => {
  return fs
    .readdirSync(fsRoot)
    .filter((fileName) => fileName.endsWith(DOCS_FILES_EXTENSION))
    .map((fileName) => {
      const slug = fileName.replace(DOCS_FILES_EXTENSION, "");
      const filePath = `${fsRoot}/${fileName}`;
      const { data: meta } = matter(fs.readFileSync(filePath, "utf-8"));

      if (!meta.title) {
        throw `Document ${filePath} has no title header`;
      }
      return {
        title: `${meta.title}`,
        link: slug === "index" ? `${urlRoot}` : `${urlRoot}/${slug}`,
        order: meta.order || (slug === "index" ? 0 : 9999)
      };
    }).sort((p1,p2)=> p1.order - p2.order);
};
const getCurrentSection = (fsRoot: string, urlRoot: string) => {
  if (!fs.existsSync(fsRoot)) return null;

  return getStructure(fsRoot, urlRoot);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const category = params?.category || "index";
  const categories = getStructure(DOCS_FILES_ROOT, DOCS_URL_ROOT);
  const currentSection = getCurrentSection(`${DOCS_FILES_ROOT}/${category}`,`${DOCS_URL_ROOT}/${category}`);
  const menu ={categories,currentSection}
  const filePath = slug ? `${DOCS_FILES_ROOT}/${category}/${slug}.md` : `${DOCS_FILES_ROOT}/${category}.md`;
  const { data: meta, content } = matter(
    fs.readFileSync(filePath, "utf-8")
  );
  
  return {
    props: {
      meta,
      content,
      menu,
      category: params?.category ? `${DOCS_URL_ROOT}/${category}` : DOCS_URL_ROOT,
      page: slug?`${DOCS_URL_ROOT}/${category}/${slug}`:`${DOCS_URL_ROOT}/${category}`

    },
  };
};