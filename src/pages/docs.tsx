import { DocsLayout } from "components";
import { NextPage } from "next";
import Head from "next/head";
import { DocsPageProps } from "utils/docs";
import { PAGES } from "utils/pages";
export { getStaticProps } from "utils/docs";

const DocsPage: NextPage<DocsPageProps> = ({
  meta,
  content,
  menu,
  category,
  page,
}) => {
  return (
    <>
      <Head>
        <title>{PAGES.DOCS.title}</title>
      </Head>
      <DocsLayout
        meta={meta}
        content={content}
        menu={menu}
        category={category}
        page={page}
      ></DocsLayout>
    </>
  );
};
export default DocsPage;
