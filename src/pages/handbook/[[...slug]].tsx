
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";

import {HandbookLayout} from "~/components/handbook";
import {site} from "~/config";
import {ContentManager, PageProps} from "~/modules/content-manager";
import {Handbook, HandbookProps} from "~/modules/handbook";


const DocsPage: NextPage<PageProps<HandbookProps>> = ({menu, social, data}) => {
  const handbook = ContentManager.root(menu, site.handbook.slug);
  return (
    <>
      <Head>
        <title>{data.page.meta.title} - {handbook.title} - {site.name}</title>
      </Head>
      <HandbookLayout
        menu={menu}
        social={social}
        handbook={data}
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
  const manager = new ContentManager();
  const handbook = new Handbook();
  return {
    props: manager.getPageProps(handbook.getStaticProps(slug)),
  };
};

export default DocsPage;
