
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";

import {HandbookLayout} from "~/components/handbook";
import {Handbook, HandbookProps} from "~/utils/handbook";
import {PAGES} from "~/utils/pages";

const DocsPage: NextPage<HandbookProps> = ({
  menu,
  page,
  prev,
  next
}) => {
  return (
    <>
      <Head>
        <title>{page.meta.title} :: {PAGES.HANDBOOK.title}</title>
      </Head>
      <HandbookLayout
        menu={menu}
        page={page}
        prev={prev}
        next={next}
      ></HandbookLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const handbook = new Handbook();
  return {
    paths: handbook.getStaticPaths(),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = ({params}) => {
  const slug = (params?.slug && Array.isArray(params.slug)) ? params.slug : ["get-started"];

  return {
    props: (new Handbook()).getStaticProps(slug)
  };
};

export default DocsPage;
