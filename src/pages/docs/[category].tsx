import { DocsLayout } from "components";
import { NextPage } from "next";

export { getStaticProps } from "utils/docs";
import { DocsPageProps, getStaticCategoryPaths } from "utils/docs";

export const getStaticPaths = getStaticCategoryPaths;

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
