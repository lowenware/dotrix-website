import {NextPage} from "next";
import Head from "next/head";

import {Logo} from "~/assets";
import {BlogPosts} from "~/components/blog";
import {Button} from "~/components/button";
import {PageLayout, Slide} from "~/components/layout";
import {Blog, BlogPostRaw, mapBlogPostRawToMeta} from "~/modules/blog";
import cfg from "~/modules/config";
import {ContentManager, PageProps, StaticPageMeta} from "~/modules/content-manager";
interface Home {
  meta: StaticPageMeta,
  posts: BlogPostRaw[],
}
const MAX_BLOG_POSTS = 8;

const Home: NextPage<PageProps<Home>> = ({menu, social, data}) => {
  const {meta, posts} = data;
  const handbook = ContentManager.root(menu, cfg.handbook.slug);
  const github = social.find(l => l.slug === "github");
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <PageLayout slug={[meta.slug]} menu={menu} social={social}>
        <Slide image="/images/low-poly-mountain.png" size="large">
          <section className="flex flex-col space-y-64">
            <div className="flex flex-col space-y-64 text-center text-white">
              <div className="text-h1 text-white">
                Program Your World
              </div>
              <h1>
                {meta.title}
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row self-center mx-auto justify-center">
              <Button
                href={handbook.url}
                className="mb-4 sm:mb-0 sm:mr-36"
                variant="primary"
              >
                Get Started
              </Button>
              {github && (
                <Button href={github.url} variant="outline" className="flex space-x-16 mb-10 sm:mb-0" softLink>
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
            <article className="flex flex-col space-y-24">
              <h1>Performance and Safety</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
            </article>

            <article className="flex flex-col space-y-24">
              <h1>ECS Programming pattern</h1>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn&apos;t anything embarrassing hidden in the middle
                of text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet
              </p>
            </article>
            <article className="flex flex-col space-y-24">
              <h1>Crossplatform</h1>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </article>
            <article className="flex flex-col space-y-24">
              <h1>OpenSource</h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </article>
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
      meta: manager.page("home"),
      posts: new Blog().getRawBlogPosts(MAX_BLOG_POSTS),
    }),
  };
};

export default Home;
