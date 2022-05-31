import md from "markdown-it";
import {GetStaticProps, NextPage} from "next";
import Head from "next/head";

import {PageLayout} from "~/components/layout";
import {
  ContentManager, StaticPageProps
} from "~/modules/content-manager";

export async function getStaticPaths() {
  return {
    paths: (new ContentManager()).getStaticPaths(),
    fallback: false,
  };
}

const StaticSlugPage: NextPage<StaticPageProps> = ({page}) => {
  const {meta, content} = page;

  return (<>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <PageLayout className="pt-80">
      <main className="mx-auto max-w-screen-lg">
        <h1>{meta.title}</h1>
        <div
          dangerouslySetInnerHTML={{__html: md().render(content)}}
        />
      </main>
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
    props: manager.getStaticProps(slug)
  };
};

export default StaticSlugPage;
