import { DocsLayout } from "components";
import { NextPage } from "next";
import { DocsPageProps } from "utils/docs";
export { getStaticProps } from "utils/docs";

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
