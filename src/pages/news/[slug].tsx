import { ArticleLayout, ListingLayout } from "components";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";

import {
  ArticleData,
  countTotalPages,
  getListingStaticProps,
  getNewsFiles,
  getNewsItems,
  ListingData,
  NEWS_FILES_ROOT,
} from "utils/news";

export async function getStaticPaths() {
  const files = getNewsFiles();

  const pagesCount = countTotalPages(files.length);
  const paths = [
    ...files.map((fileName) => ({
      params: {
        slug: fileName.replace(".md", ""),
      },
    })),
    ...Array.from(Array(pagesCount).keys()).map((pageNum) => ({
      params: {
        slug: `${pageNum + 1}`,
      },
    })),
  ];

  return {
    paths,
    fallback: false,
  };
}

interface NewsPageProps {
  article?: ArticleData;
  listing?: ListingData;
}

const NewsSlugPage: NextPage<NewsPageProps> = ({ article, listing }) => {
  return (
    <>
      {article && (
        <ArticleLayout className="text-white flex flex-col" article={article} />
      )}
      {listing && <ListingLayout listing={listing} />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const currentPage = parseInt(slug);
  const isListing = !isNaN(currentPage) && `${currentPage}` === slug;
  const items = getNewsItems();

  if (isListing) {
    const currentPage = parseInt(slug);
    return {
      props: {
        listing: getListingStaticProps(currentPage, items),
      },
    };
  }

  const { data: meta, content } = matter(
    fs.readFileSync(`${NEWS_FILES_ROOT}/${slug}.md`, "utf-8")
  );

  const currentPost = items.find((p) => p.slug === slug)!;
  const currentIndex = items.indexOf(currentPost);
  let prevNewsItem = null;
  let nextNewsItem = null;
  if (currentIndex > 0) {
    prevNewsItem = items[currentIndex - 1];
  }
  if (currentIndex < items.length - 1) {
    nextNewsItem = items[currentIndex + 1];
  }
  return {
    props: {
      article: {
        meta,
        content,
        prevNewsItem,
        nextNewsItem,
      },
    },
  };
};

export default NewsSlugPage;
