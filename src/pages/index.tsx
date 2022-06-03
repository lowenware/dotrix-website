import {NextPage} from "next";
import Head from "next/head";

import {Logo} from "~/assets";
import {BlogPosts} from "~/components/blog";
import {Button} from "~/components/button";
import {Markdown, PageLayout, Slide} from "~/components/layout";
import {site} from "~/config";
import {Blog, BlogPostRaw, mapBlogPostRawToMeta} from "~/modules/blog";
import {ContentManager, PageProps, StaticContent, StaticPageMeta} from "~/modules/content-manager";

interface Home {
  meta: StaticPageMeta,
  posts: BlogPostRaw[],
  features: StaticContent[],
}

const Home: NextPage<PageProps<Home>> = ({menu, social, data}) => {
  const {meta, posts, features} = data;
  const handbook = ContentManager.root(menu, site.handbook.slug);
  const github = social.find(l => l.slug === "github");
  return (
    <>
      <Head>
        <title>{meta.title} - {site.name}</title>
      </Head>
      <PageLayout slug={meta.slug} menu={menu} social={social}>
        <Slide image="/images/low-poly-mountain.png" size="large">
          <section className="flex flex-col space-y-64 p-24">
            <div className="flex flex-col space-y-64 text-center text-white">
              <div className="text-h1 text-white">
                Program Your World
              </div>
              <h1>
                {meta.title}
              </h1>
            </div>
            <div
              className="flex flex-col sm:flex-row space-y-24 sm:space-y-0 space-x-0 sm:space-x-24
                self-center mx-auto justify-center"
            >
              <Button
                href={handbook.url}
                variant="primary"
              >
                Get Started
              </Button>
              {github && (
                <Button
                  href={github.url}
                  variant="outline"
                  className="flex space-x-16"
                  softLink
                >
                  <Logo.GitHub />
                  <span>GitHub</span>
                </Button>
              )}
            </div>
          </section>
        </Slide>

        <BlogPosts
          posts={posts.map(mapBlogPostRawToMeta)}
          className="bg-black-800 w-full px-32 -mt-32"
        />

        <section className="flex">
          <div
            className="grid max-w-screen-xl mx-auto gap-64 px-32 grid-cols-1 lg:grid-rows-2
              lg:grid-cols-2 my-64"
          >
            {features.map(
              feature => (
                <Markdown
                  key={feature.slug}
                  tag="article"
                  className="flex flex-col space-y-24"
                  content={feature.content}
                />
              )
            )}
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const manager = new ContentManager();
  return {
    props: manager.getPageProps({
      meta: manager.page(site.home.slug),
      features: manager.readFolderOrdered([site.home.slug, "features"]),
      posts: new Blog().getRawBlogPosts(site.home.maxBlogPosts),
    }),
  };
};

export default Home;
