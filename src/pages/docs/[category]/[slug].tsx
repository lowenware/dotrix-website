import { DocsLayout } from "components";
import { NextPage } from "next";
import fs from "fs";
import { DocsPageProps, getStaticSlugPaths } from "utils/docs";
export { getStaticProps } from "utils/docs";

export const getStaticPaths = getStaticSlugPaths;

const DocsPage: NextPage<DocsPageProps> = ({
  meta,
  content,
  menu,
  category,
  page,
}) => {
  return (
    <DocsLayout
      meta={meta}
      content={content}
      menu={menu}
      category={category}
      page={page}
    ></DocsLayout>
  );
};

export default DocsPage;
