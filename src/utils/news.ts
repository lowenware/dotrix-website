import fs from "fs";
import matter from "gray-matter";

export const NEWS_ITEMS_PER_PAGE = 16;
export const NEWS_FILES_EXTENSION = ".md";
export const NEWS_FILES_ROOT = "news"
export const NEWS_URLS_ROOT = "/news"

export interface NewsMeta {
  title: string;
  summary: string;
  date: string;
  tags: string
  image?: string;
}

export interface NewsListItem {
  slug: string;
  meta: NewsMeta;
}

export interface ArticleData {
  meta: NewsMeta;
  content: string;
  nextNewsItem: NewsListItem | null;
  prevNewsItem: NewsListItem | null;
}

export interface ListingData {
  items: NewsListItem[];
  currentPage: number;
  totalPages: number;
}

export const getNewsFiles =()=>{
  return fs.readdirSync(NEWS_FILES_ROOT).filter(
    fileName => fileName.endsWith(NEWS_FILES_EXTENSION)
  );
}

export const getNewsItems = (): NewsListItem[] => {
  return getNewsFiles().map(
    fileName => ({
      slug: fileName.replace(NEWS_FILES_EXTENSION, ""),
      meta: matter(fs.readFileSync(`${NEWS_FILES_ROOT}/${fileName}`)).data as NewsMeta,
    })
  )
  .sort(compareNews);
}

export const getListingStaticProps = (currentPage: number, items: NewsListItem[]) => {
  const totalPages = countTotalPages(items.length);
  const offsetFrom = (currentPage - 1) * NEWS_ITEMS_PER_PAGE;
  const offsetTo = offsetFrom + NEWS_ITEMS_PER_PAGE;

  return {
    items: items.slice(offsetFrom, offsetTo),
    totalPages,
    currentPage
  };
};

export const compareNews = (post1: NewsListItem, post2: NewsListItem) => {
  const date1 = new Date(post1.meta.date);
  const date2 = new Date(post2.meta.date);
  if (date1 > date2) {
    return 1;
  }
  if (date1 < date2) {
    return -1;
  }
  return 0;
}

export const countTotalPages = (totalNewsItems: number) => Math.ceil(totalNewsItems / NEWS_ITEMS_PER_PAGE);
