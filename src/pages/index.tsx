import {NextPage} from "next";
import Head from "next/head";

import {Logo} from "~/assets";
import {BlogPosts} from "~/components/blog";
import {Button} from "~/components/button";
import {PageLayout, Slide} from "~/components/layout";
import {Blog, BlogPostRaw, mapBlogPostRawToMeta} from "~/utils/blog";
import {HANDBOOK_URL_ROOT} from "~/utils/handbook";
import {PAGES} from "~/utils/pages";

interface HomepageProps {
  posts: BlogPostRaw[],
}
const MAX_BLOG_POSTS = 8;

const Home: NextPage<HomepageProps> = ({posts}) => {
  return (
    <>
      <Head>
        <title>{PAGES.HOME.title}</title>
      </Head>
      <PageLayout currentPage="HOME">
        <Slide image="/images/low-poly-mountain.png" size="large">
          <section className="flex flex-col space-y-64">
            <div className="flex flex-col space-y-64 text-center text-white">
              <p className="text-h1">
                Program Your World
              </p>
              <h1>
                OpenSource 3D Engine for Rust Developers
              </h1>
            </div>
            <div className={
              "flex flex-col sm:flex-row self-center mx-auto justify-center"
            }>
              <Button
                href={`${HANDBOOK_URL_ROOT}`}
                className="mb-4 sm:mb-0 sm:mr-36"
                variant="primary"
              >
                Get Started
              </Button>
              <Button href="/" variant="outline" className="flex space-x-16 mb-10 sm:mb-0">
                <Logo.Github />
                <span>GitHub</span>
              </Button>
            </div>
          </section>
        </Slide>

        <BlogPosts
          posts={posts.map(mapBlogPostRawToMeta)}
          className="bg-black-800 w-full px-32 -mt-32"
        />
        <section className="w-full bg-black-800 flex justify-center">
          <div
            className="max-w-7xl grid md:gap-32 grid-cols-1 sm:grid-rows-2
            sm:grid-cols-2 mb-64 font-bold"
          >
            <div className="flex flex-col pt-64 px-32 sm:pl-32">
              <p className="text-white text-24 mb-12">
                Performance and Safety
              </p>
              <p className="text-blue-light">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
            </div>

            <div className="flex flex-col pt-64 px-32 sm:pr-32">
              <p className="text-white text-24 mb-12">
                ECS Programming pattern
              </p>
              <p className="text-blue-light">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn&apos;t anything embarrassing hidden in the middle
                of text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet
              </p>
            </div>
            <div className="flex flex-col pt-8 px-32 sm:pl-32">
              <p className="text-white text-24 mb-12">
                Crossplatform
              </p>
              <p className="text-blue-light">
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>
            <div className="flex flex-col pt-8 px-32 sm:pr-32">
              <p className="text-white text-24 mb-12">OpenSource </p>
              <p className="text-blue-light ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    posts: new Blog().getRawBlogPosts(MAX_BLOG_POSTS),
  },
});

export default Home;
