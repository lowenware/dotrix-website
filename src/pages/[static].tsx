import {GetStaticProps, NextPage} from "next";
import Head from "next/head";

import {Markdown,PageLayout} from "~/components/layout";
import {site} from "~/config";
import {
  ContentManager, PageProps, StaticPage
} from "~/modules/content-manager";

export async function getStaticPaths() {
  return {
    paths: (new ContentManager()).getStaticPaths(),
    fallback: false,
  };
}

const StaticSlugPage: NextPage<PageProps<StaticPage>> = ({menu, social, data}) => {
  const {meta, content} = data;

  return (<>
    <Head>
      <title>{meta.title} - {site.name}</title>
    </Head>
    <PageLayout className="pt-80" slug={meta.slug} menu={menu} social={social}>
      <Markdown
        className="mx-auto max-w-screen-lg p-24"
        tag="main"
        patchHtml={html => `<h1>${meta.title}</h1>${html}`}
        content={content}
      />
    </PageLayout>
  </>);
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params?.static) {
    throw `Not implemented page for params ${JSON.stringify(params)}`;
  }

  const slug = `${params.static}`;
  const manager = new ContentManager();

  return {
    props: manager.getPageProps(manager.getStaticPage(slug))
  };
};

export default StaticSlugPage;
